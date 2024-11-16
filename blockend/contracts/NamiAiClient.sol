// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
import "@openzeppelin/contracts/utils/Create2.sol";

import "./hyperlane/Structs.sol";
import "./hyperlane/IMailbox.sol";
import "./NamiVault.sol";
import { ISP } from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import { Attestation } from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import { DataLocation } from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";


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
        address testingCore;
        address testingAiAgent;
    }

    struct Disaster {
        string name;
        string description;
        string disasterType;
        string location;
        uint256 fundsNeeded;
        address vaultAddress;
        string ensName;
        string baseName;
    }

    struct UnlockFunds {
        string beneficiaryName;
        address beneficiaryAddress;
        string comments;
        Claim[] claims;
        bytes[] priceUpdates;
    }
    
    struct Claim {
        uint32 chainId;
        uint8[] tokens;
        uint256[] amounts;
    }

    IMailbox public mailbox;
    IPyth public priceOracle;

    uint32 public KINTO_DOMAIN_ID = 7887;
    address public owner;
    address public testingCore;
    mapping(address=>bool) public allowlistedAddresses;
    mapping(uint256=>uint64) public disasterIdToAttestationId;
    ISP public spInstance;
    bytes32[4] public priceFeedIds;
    uint64 public createDisasterSchemaId;
    uint64 public unlockFundsSchemaId;
    uint256 public disasterCount;

    constructor(ConstructorParams memory _params) {
        mailbox = _params.mailbox;
        priceOracle = _params.priceOracle;
        spInstance = _params.spInstance;
        priceFeedIds = _params.priceFeedIds;
        createDisasterSchemaId = _params.createDisasterSchemaId;
        unlockFundsSchemaId = _params.unlockFundsSchemaId;
        testingCore = _params.testingCore;
        owner = msg.sender;
        allowlistedAddresses[_params.testingAiAgent] = true;
    }

    modifier onlyOwner() {
        if(msg.sender != owner) revert NotOwner(owner, msg.sender);
        _;
    }

    modifier onlyAiAgent() {
        if(!allowlistedAddresses[msg.sender]) revert NotAIAgent();
        _;
    }

    event CreateDisasterInitiated(bytes32 _messageId, uint64 attestationId, Disaster disaster);
    event UnlockFundsInitiated(bytes32 _messageId, uint64 attestationId, UnlockFunds unlockFunds);

    function allowlistAiAgent(address aiAgent) external onlyOwner {
        allowlistedAddresses[aiAgent] = true;
    }

    function updateSchemaIds(uint64 _createDisasterSchemaId, uint64 _unlockFundsSchemaId) external onlyOwner {
        createDisasterSchemaId = _createDisasterSchemaId;
        unlockFundsSchemaId = _unlockFundsSchemaId;
    }

    function createDisaster(Disaster memory _params) external onlyAiAgent {
        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(msg.sender);

        bytes memory data = abi.encode(_params.name, _params.description, _params.disasterType, _params.location, block.timestamp, _params.fundsNeeded, _params.vaultAddress, _params.ensName, _params.baseName);
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
        bytes32 _messageId = mailbox.dispatch{value: 0}(KINTO_DOMAIN_ID, addressToBytes32(testingCore), abi.encode(uint8(0), abi.encode(_attestationId, _params.fundsNeeded)));

        emit CreateDisasterInitiated(_messageId, _attestationId, _params);
        disasterCount += 1;
    }

    function unlockFunds(uint256 _disasterId, UnlockFunds memory _params) external onlyAiAgent {
        bytes[] memory recipients = new bytes[](2);
        recipients[0] = abi.encode(msg.sender);
        recipients[1] = abi.encode(_params.beneficiaryAddress);

        uint fee = priceOracle.getUpdateFee(_params.priceUpdates);
        priceOracle.updatePriceFeeds{ value: fee }(_params.priceUpdates);

        uint256 _totalUsdAmount = getUSDAmount(_params.claims, 60);

        bytes memory data = abi.encode(_params.beneficiaryName, _totalUsdAmount, _params.comments, _params.beneficiaryAddress);
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
        bytes32 _messageId = mailbox.dispatch{value: 0}(KINTO_DOMAIN_ID, addressToBytes32(testingCore), abi.encode(uint8(1), abi.encode(_attestationId, _disasterId, _params.beneficiaryAddress, _params.claims, _totalUsdAmount)));

        emit UnlockFundsInitiated(_messageId, _attestationId, _params);

    }  

    function getUSDAmount(Claim[] memory _claims, uint256 olderThan) public view returns(uint256 _usdAmount){
        _usdAmount = 0;

        uint256 nativeUsdPrice;
        uint256 wethUsdPrice;
        uint256 usdcUsdPrice;
        uint256 usdtUsdPrice;

        for(uint8 i=0; i < _claims.length; i++) {
            for(uint8 j=0; j < _claims[i].tokens.length; j++) {
                if(_claims[i].tokens[j] == 0)
                {
                    if(nativeUsdPrice == 0) nativeUsdPrice = formatToUsdInWei(priceOracle.getPriceNoOlderThan(priceFeedIds[0], olderThan));
                    _usdAmount += (_claims[i].amounts[j] * nativeUsdPrice) / (10 ** 18);
                } 
                else if(_claims[i].tokens[j] == 1) {
                    if(wethUsdPrice == 0) wethUsdPrice = formatToUsdInWei(priceOracle.getPriceNoOlderThan(priceFeedIds[1], olderThan));
                    _usdAmount += (_claims[i].amounts[j] * wethUsdPrice) / (10 ** 18);
                } 
                else if(_claims[i].tokens[j] == 2) {
                    if(usdcUsdPrice == 0) usdcUsdPrice = formatToUsdInWei(priceOracle.getPriceNoOlderThan(priceFeedIds[2], olderThan));
                    _usdAmount += (_claims[i].amounts[j] * usdcUsdPrice) / (10 ** 18);
                } 
                else if(_claims[i].tokens[j] == 3) {
                    if(usdtUsdPrice == 0) usdtUsdPrice = formatToUsdInWei(priceOracle.getPriceNoOlderThan(priceFeedIds[3], olderThan));
                    _usdAmount += (_claims[i].amounts[j] * usdtUsdPrice) / (10 ** 18);
                }
            }
        }
    }

    function formatToUsdInWei(PythStructs.Price memory _priceData) public pure returns(uint256){
        uint256 absPrice = uint256(int256(_priceData.price < 0 ? -_priceData.price : _priceData.price));
        uint256 priceInWei = absPrice * 10 ** 18;

        uint256 absExpo = uint256(int256(_priceData.expo < 0 ? -_priceData.expo : _priceData.expo));
        return uint256(priceInWei / 10 ** absExpo);
    }

    function bytes32ToAddress(bytes32 _bytes32) public pure returns (address) {
        return address(uint160(uint256(_bytes32)));
    }

    function addressToBytes32(address _address) public pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }

    function getVaultAddress(uint256 _disasterId) external view returns (address) {
        bytes memory bytecode = type(NamiVault).creationCode;
        return Create2.computeAddress(bytes32(_disasterId), keccak256(bytecode));
    }

}