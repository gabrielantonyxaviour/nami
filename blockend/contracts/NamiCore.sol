// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./hyperlane/Structs.sol";
import "./hyperlane/IMailbox.sol";
import "./interface/IVaultFactory.sol";

error AlreadyInitialized();
error InvalidCaller(address sender);
error InvalidFundingId(uint256 fundingId);
error InvalidCrosschainCaller(uint32 _origin, bytes32 _sender);
error NotMailbox();

contract TestingCore {

    struct Disaster {
        uint64 attestationId;
        address vaultAddress;
        uint256 estimatedRequirementInUSD;
    }

    struct Funding {
        uint256 disasterId;
        address beneficiary;
        uint256 amountInUSD;
        bool claimed;        
        uint64 attestationId;
    }

    struct Claim {
        uint32 chainId;
        uint256 ethAmount;
        uint256 wethAmount;
        uint256 usdcAmount;
        uint256 usdtAmount;
    }

    address public namiAiClient;
    address public owner;
    address public vaultFactory;
    mapping(uint256=>Claim[]) public claims;
    mapping(uint256=>Disaster) public disasters;
    mapping(uint256=>Funding) public funding;
    mapping(uint32=>bytes32) public crosschainAddresses;
    uint256 public disasterCount;
    uint256 public fundingCount;
    bool public initialized;

    IMailbox public mailbox;
    uint32 public constant KINTO_DOMAIN_ID = 80002;
    uint32 public constant BASE_DOMAIN_ID = 84532;

    constructor(IMailbox _mailbox) {
        owner = msg.sender;
        mailbox=_mailbox;
    }

    event DisasterCreated(uint256 disasterId, uint64  attestationId, uint256  estimatedRequirementInUSD, address vaultAddress);
    event FundingUnlocked(uint256 fundingId, uint256 disasterId, uint64 attestationId, address beneficiary, Claim[] claims, uint256 amountInUsd);
    event FundClaimInitiated(uint256 fundingId, address beneficiary, Claim[] claims);
    event FundClaimFailed(uint256 fundingId, address beneficiary, uint32 chain, uint8 token, uint256 amount);

    modifier onlyOwner(){
        if(msg.sender != owner) revert InvalidCaller(msg.sender);
        _;
    }

    modifier onlyMailbox(){
        if(msg.sender != address(mailbox)) revert NotMailbox();
        _;
    }

    modifier onlyNamiAiClient(bytes32 _sender, uint32 _origin){
        if(_origin != BASE_DOMAIN_ID || bytes32ToAddress(_sender) != namiAiClient) revert InvalidCrosschainCaller(_origin, _sender);
        _;
    }

    modifier onlyBeneficiary(uint256 _fundingId){
        if(funding[_fundingId].beneficiary != msg.sender) revert InvalidCaller(msg.sender);
        _;
    }

    modifier onlyAllowed(uint32 _origin, bytes32 _sender) {
        if(crosschainAddresses[_origin] != _sender) revert InvalidCrosschainCaller(_origin, _sender);
        _;
    }

    function initialize(address _namiAiClient, address _vaultFactory) external onlyOwner{
        if(initialized) revert AlreadyInitialized();
        namiAiClient = _namiAiClient;
        vaultFactory = _vaultFactory;
        initialized = true;
    }

    function setOwner(address _owner) public onlyOwner {
        owner = _owner;
    }

    function setNamiAiClient(address _namiAiClient) public onlyOwner {
        namiAiClient = _namiAiClient;
    }
    
    function setVaultFactory(address _vaultFactory) public onlyOwner {
        vaultFactory = _vaultFactory;
    }

    function setCrosschainAddresses(uint32[] memory _origin, bytes32[] memory _addresses) external onlyOwner {
        for(uint256 i=0; i<_origin.length; i++) crosschainAddresses[_origin[i]] = _addresses[i];
    }

    function _createDisaster(uint64 _attestationId, uint256 _estimatedRequirementInUSD) internal {
        Disaster storage disaster = disasters[disasterCount];
        disaster.attestationId = _attestationId;
        disaster.estimatedRequirementInUSD = _estimatedRequirementInUSD;
        disaster.vaultAddress = IVaultFactory(vaultFactory).createVault(disasterCount);
        emit DisasterCreated(disasterCount, _attestationId, _estimatedRequirementInUSD, disaster.vaultAddress);
        disasterCount++;
    }

    function _unlockFunds(uint256 _disasterId, uint64 _attestationId, address _beneficiary, Claim[] memory _claims, uint256 _totalAmountInUSD) internal {
       Funding memory _funding = Funding({
            disasterId: _disasterId,
            beneficiary: _beneficiary,
            amountInUSD: _totalAmountInUSD,
            attestationId: _attestationId,
            claimed: false
        });
        funding[fundingCount] = _funding;
        for(uint256 i=0; i < _claims.length; i++){
            claims[fundingCount].push(_claims[i]);
        }

        emit FundingUnlocked(fundingCount, _disasterId, _attestationId, _beneficiary, _claims, _totalAmountInUSD);
        fundingCount++;
    }

    function claimFunds(uint256 _fundingId) external onlyBeneficiary(_fundingId) {
        if(_fundingId >= fundingCount) revert InvalidFundingId(_fundingId);
        Funding memory _funding = funding[_fundingId];
        Claim[] memory _claims = claims[_fundingId];

        for(uint256 i=0; i < _claims.length; i++){
            Claim memory _claim = _claims[i];
            if(_claim.chainId != KINTO_DOMAIN_ID)
            {
                bytes memory encodedMessage=abi.encode(_funding.disasterId, msg.sender, _claim.ethAmount, _claim.wethAmount, _claim.usdcAmount, _claim.usdtAmount);
                mailbox.dispatch{value: 0}(_claim.chainId, crosschainAddresses[_claim.chainId], encodedMessage);
            }else IVaultFactory(vaultFactory).claimFunds(_funding.disasterId, msg.sender, _claim.ethAmount, _claim.wethAmount, _claim.usdcAmount, _claim.usdtAmount);
        }
        _funding.claimed=true;
        emit FundClaimInitiated(_fundingId, _funding.beneficiary, _claims);
    }

    function handle(uint32 _origin, bytes32 _sender, bytes calldata _data) external payable onlyMailbox onlyNamiAiClient(_sender, _origin) {
        (uint8 _action, bytes memory _params) = abi.decode(_data, (uint8, bytes));
        if(_action == 0){
            (uint64 _attestationId, uint256 _estimatedRequirementInUSD) = abi.decode(_params, (uint64, uint256));
            _createDisaster(_attestationId, _estimatedRequirementInUSD);
        } else if(_action == 1){
            (uint64 _attestationId, uint256 _disasterId, address _beneficiary, Claim[] memory _claims, uint256 _totalAmountInUSD) = abi.decode(_params, (uint64, uint256, address, Claim[], uint256));
            _unlockFunds(_disasterId, _attestationId, _beneficiary, _claims, _totalAmountInUSD);
        }
    }

    function getDisaster(uint256 _disasterId) public view returns (Disaster memory){
        return disasters[_disasterId];
    }

    function getFunding(uint256 _fundingId) public view returns (Funding memory){
        return funding[_fundingId];
    }

    function addressToBytes32(address _address) public pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }

    function bytes32ToAddress(bytes32 _bytes32) public pure returns (address) {
        return address(uint160(uint256(_bytes32)));
    }

}

