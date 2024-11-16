// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
import "@openzeppelin/contracts/utils/Create2.sol";
import "./hyperlane/Structs.sol";
import "./hyperlane/IMailbox.sol";
import "./TestingVault.sol";
import "./interface/IVault.sol"; 

error NotAuthorizedCaller(address caller);
error CannotPerformOperationOnThisChain();
error VaultDoesNotExist(address vault);
error InvalidSenderChain(uint32 _origin);

contract TestingVaultFactory {

    bool public initialized;

    IMailbox public mailbox;
    address public authorizedCaller;
    uint256 public KINTO_CHAIN_ID = 80002;

    address[3] public tokenAddresses;

    mapping(uint256 => address) public vaults;

    event FundsClaimed(address vault, address beneficiary, uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount);

    modifier onlyOnce(){
        if(initialized) revert AlreadyInitialized();
        _;
    }

    modifier onlyAllowed(address _crosschainCaller){
        if(block.chainid == KINTO_CHAIN_ID)
        {
            if(msg.sender != authorizedCaller) revert NotAuthorizedCaller(msg.sender);
        } else {
            if(msg.sender != address(mailbox) || _crosschainCaller != authorizedCaller) revert NotAuthorizedCaller(msg.sender);
        }
        _;
    }

    modifier onlyKinto(){
        if(block.chainid != KINTO_CHAIN_ID) revert CannotPerformOperationOnThisChain();
        _;
    }
    
    function initialize(address _mailbox, address _authorizedCaller, address[3] memory _tokens) public onlyOnce {
        mailbox = IMailbox(_mailbox);
        authorizedCaller = _authorizedCaller;
        tokenAddresses = _tokens;
        initialized = true;
    }

    function _createVault(uint256 salt) internal returns(address deployed) {
        bytes memory bytecode = type(TestingVault).creationCode;
        deployed = Create2.deploy(0, bytes32(salt), bytecode);
        vaults[salt] = deployed; 
        IVault(deployed).initialize(address(this), tokenAddresses);
    }

    function createVault(uint256 salt) external onlyAllowed(msg.sender) returns(address deployed) {
        deployed = _createVault(salt);  
    }

    function _createVaultAndClaimFunds(uint256 salt, address _beneficiary,  uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount) internal {
        _createVault(salt);
        _claimFunds(vaults[salt], _beneficiary, ethAmount, wethAmount, usdcAmount, usdtAmount);
    }

    function claimFunds(uint256 _disasterId, address _beneficiary, uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount) external onlyAllowed(msg.sender) {
        _claimFunds(vaults[_disasterId], _beneficiary, ethAmount, wethAmount, usdcAmount, usdtAmount);
    }

    function _claimFunds(address _vault, address _beneficiary,  uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount) internal  {
        if(_vault == address(0)) revert VaultDoesNotExist(_vault);
        TestingVault(payable(_vault)).withdrawValue(_beneficiary, ethAmount, wethAmount, usdcAmount, usdtAmount);
        emit FundsClaimed(_vault, _beneficiary, ethAmount, wethAmount, usdcAmount, usdtAmount);
    }

    function handle(uint32 _origin, bytes32 _sender, bytes calldata _data) external payable onlyAllowed(bytes32ToAddress(_sender)) {
        if(_origin != KINTO_CHAIN_ID) revert InvalidSenderChain(_origin);
        (uint256 _disasterId, address _beneficiary, uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount) = abi.decode(_data, (uint256, address, uint256, uint256, uint256, uint256));
        if(vaults[_disasterId] == address(0)) _createVaultAndClaimFunds(_disasterId, _beneficiary, ethAmount, wethAmount, usdcAmount, usdtAmount);  
        else _claimFunds(vaults[_disasterId], _beneficiary, ethAmount, wethAmount, usdcAmount, usdtAmount);
    }

    function bytes32ToAddress(bytes32 _bytes32) public pure returns (address) {
        return address(uint160(uint256(_bytes32)));
    }

    function addressToBytes32(address _address) public pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }

    function getVaultAddress(uint256 _disasterId) external view returns (address) {
        bytes memory bytecode = type(TestingVault).creationCode;
        return Create2.computeAddress(bytes32(_disasterId), keccak256(bytecode));
    }
 
}
