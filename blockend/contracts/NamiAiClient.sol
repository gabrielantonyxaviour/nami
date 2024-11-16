// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
import "@openzeppelin/contracts/utils/Create2.sol";

import "./hyperlane/Structs.sol";
import "./hyperlane/IMailbox.sol";
import "./interface/IVaultFactory.sol";
import {ISP} from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {Attestation} from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import {DataLocation} from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

error InsufficientBetAmount(uint256 betAmount, uint256 requiredAmount);
error NotAIAgent();
error NotOwner(address owner, address caller);

contract NamiAiClient {
    struct ConstructorParams {
        IMailbox mailbox;
        ISP spInstance;
        IPyth priceOracle;
        bytes32[4] priceFeedIds;
        uint64 createDisasterSchemaId;
        uint64 unlockFundsSchemaId;
        address namiCore;
        address namiMpcWallet;
        address vaultFactory;
    }

    struct Disaster {
        string name;
        string description;
        string disasterType;
        string location;
        uint256 fundsNeeded;
        string ensName;
        string baseName;
    }

    struct UnlockFunds {
        string beneficiaryName;
        address beneficiaryAddress;
        string comments;
        Claim[] claims;
    }

    struct Claim {
        uint32 chainId;
        uint256 ethAmount;
        uint256 wethAmount;
        uint256 usdcAmount;
        uint256 usdtAmount;
    }

    IMailbox public mailbox;
    IPyth public priceOracle;

    uint32 public KINTO_DOMAIN_ID = 7887;
    address public owner;
    address public namiCore;
    mapping(address => bool) public allowlistedAddresses;
    mapping(uint256 => uint64) public disasterIdToAttestationId;
    ISP public spInstance;
    bytes32[4] public priceFeedIds;
    uint64 public createDisasterSchemaId;
    uint64 public unlockFundsSchemaId;
    uint256 public disasterCount;
    address public vaultFactory;

    constructor(ConstructorParams memory _params) {
        mailbox = _params.mailbox;
        priceOracle = _params.priceOracle;
        spInstance = _params.spInstance;
        priceFeedIds = _params.priceFeedIds;
        createDisasterSchemaId = _params.createDisasterSchemaId;
        unlockFundsSchemaId = _params.unlockFundsSchemaId;
        namiCore = _params.namiCore;
        owner = msg.sender;
        allowlistedAddresses[_params.namiMpcWallet] = true;
        vaultFactory = _params.vaultFactory;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner(owner, msg.sender);
        _;
    }

    modifier onlyAiAgent() {
        if (!allowlistedAddresses[msg.sender]) revert NotAIAgent();
        _;
    }

    event CreateDisasterInitiated(
        bytes32 messageId,
        uint64 attestationId,
        Disaster disaster,
        address vaultAddress
    );
    event UnlockFundsInitiated(
        bytes32 messageId,
        uint256 disasterId,
        uint64 attestationId,
        UnlockFunds unlockFunds,
        uint256 totalAmountInUsd
    );

    function allowlistAiAgent(address aiAgent) external onlyOwner {
        allowlistedAddresses[aiAgent] = true;
    }

    function updateSchemaIds(
        uint64 _createDisasterSchemaId,
        uint64 _unlockFundsSchemaId
    ) external onlyOwner {
        createDisasterSchemaId = _createDisasterSchemaId;
        unlockFundsSchemaId = _unlockFundsSchemaId;
    }

    function createDisaster(Disaster memory _params) external onlyAiAgent {
        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(msg.sender);

        address vaultAddress = getVaultAddress(disasterCount);

        bytes memory data = abi.encode(
            _params.name,
            _params.description,
            _params.disasterType,
            _params.location,
            block.timestamp,
            _params.fundsNeeded,
            vaultAddress,
            _params.ensName,
            _params.baseName
        );
        Attestation memory a = Attestation({
            schemaId: createDisasterSchemaId,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: data
        });

        uint64 _attestationId = spInstance.attest(a, "", "", "");
        disasterIdToAttestationId[disasterCount] = _attestationId;
        bytes32 _messageId = mailbox.dispatch{value: 0}(
            KINTO_DOMAIN_ID,
            addressToBytes32(namiCore),
            abi.encode(
                uint8(0),
                abi.encode(_attestationId, _params.fundsNeeded)
            )
        );

        emit CreateDisasterInitiated(
            _messageId,
            _attestationId,
            _params,
            vaultAddress
        );
        disasterCount += 1;
    }

    function unlockFunds(
        uint256 _disasterId,
        UnlockFunds memory _params,
        bytes[] memory priceUpdates
    ) external onlyAiAgent {
        bytes[] memory recipients = new bytes[](2);
        recipients[0] = abi.encode(msg.sender);
        recipients[1] = abi.encode(_params.beneficiaryAddress);

        uint fee = priceOracle.getUpdateFee(priceUpdates);
        priceOracle.updatePriceFeeds{value: fee}(priceUpdates);

        uint256 _totalUsdAmount = getUSDAmount(_params.claims, 60);

        bytes memory data = abi.encode(
            _params.beneficiaryName,
            _totalUsdAmount,
            _params.comments,
            _params.beneficiaryAddress
        );

        Attestation memory a = Attestation({
            schemaId: unlockFundsSchemaId,
            linkedAttestationId: disasterIdToAttestationId[_disasterId],
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: data
        });
        uint64 _attestationId = spInstance.attest(a, "", "", "");
        bytes32 _messageId = mailbox.dispatch{value: 0}(
            KINTO_DOMAIN_ID,
            addressToBytes32(namiCore),
            abi.encode(
                uint8(1),
                abi.encode(
                    _attestationId,
                    _disasterId,
                    _params.beneficiaryAddress,
                    _params.claims,
                    _totalUsdAmount
                )
            )
        );

        emit UnlockFundsInitiated(
            _messageId,
            _disasterId,
            _attestationId,
            _params,
            _totalUsdAmount
        );
    }

    function getUSDAmount(
        Claim[] memory _claims,
        uint256 olderThan
    ) public view returns (uint256 _usdAmount) {
        _usdAmount = 0;

        uint256 nativeUsdPrice = formatToUsdInWei(
            priceOracle.getPriceNoOlderThan(priceFeedIds[0], olderThan)
        );
        uint256 wethUsdPrice = formatToUsdInWei(
            priceOracle.getPriceNoOlderThan(priceFeedIds[1], olderThan)
        );
        uint256 usdcUsdPrice = formatToUsdInWei(
            priceOracle.getPriceNoOlderThan(priceFeedIds[2], olderThan)
        );
        uint256 usdtUsdPrice = formatToUsdInWei(
            priceOracle.getPriceNoOlderThan(priceFeedIds[3], olderThan)
        );

        for (uint8 i = 0; i < _claims.length; i++) {
            if (_claims[i].ethAmount > 0)
                _usdAmount +=
                    (_claims[i].ethAmount * nativeUsdPrice) /
                    (10 ** 18);
            if (_claims[i].wethAmount > 0)
                _usdAmount +=
                    (_claims[i].wethAmount * wethUsdPrice) /
                    (10 ** 18);
            if (_claims[i].usdcAmount > 0)
                _usdAmount +=
                    (_claims[i].usdcAmount * usdcUsdPrice) /
                    (10 ** 18);
            if (_claims[i].usdtAmount > 0)
                _usdAmount +=
                    (_claims[i].usdtAmount * usdtUsdPrice) /
                    (10 ** 18);
        }
    }

    function formatToUsdInWei(
        PythStructs.Price memory _priceData
    ) public pure returns (uint256) {
        uint256 absPrice = uint256(
            int256(_priceData.price < 0 ? -_priceData.price : _priceData.price)
        );
        uint256 priceInWei = absPrice * 10 ** 18;

        uint256 absExpo = uint256(
            int256(_priceData.expo < 0 ? -_priceData.expo : _priceData.expo)
        );
        return uint256(priceInWei / 10 ** absExpo);
    }

    function bytes32ToAddress(bytes32 _bytes32) public pure returns (address) {
        return address(uint160(uint256(_bytes32)));
    }

    function addressToBytes32(address _address) public pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }

    function getVaultAddress(
        uint256 _disasterId
    ) public view returns (address) {
        return IVaultFactory(vaultFactory).getVaultAddress(_disasterId);
    }
}
