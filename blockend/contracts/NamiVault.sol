// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// error ZeroValueDonation(address sender);
error AlreadyInitialized();
error InvalidCaller(address sender);
error InsufficientAllowance(address sender, address token, uint256 amount);

contract NamiVault{

    // mapping(uint8=>uint256) public tokenBalances;
    // mapping(uint8=>uint256) public transferredAmounts;

    // mapping(address=>mapping(address=>uint256)) public donors;
    // mapping(address=>mapping(address=>bytes32)) public donorAttestaions;

    address public vaultFactory;
    address[3] public tokenAddresses;

    // event DonationReceived(address indexed donor, address indexed token, uint256 indexed amount);
    event Withdrawal(address indexed recipient, uint8 token, uint256 indexed amount);

    modifier onlyOnce(){
        if(vaultFactory != address(0)) revert AlreadyInitialized();
        _;
    }

    modifier onlyVaultFactory(){
        if(msg.sender != vaultFactory) revert InvalidCaller(msg.sender);
        _;
    }

    function initialize(address _vaultFactory, address[3] memory _tokens) external onlyOnce {
        vaultFactory = _vaultFactory;
        tokenAddresses = _tokens;
    }

    receive() external payable {
        // _handleDonation(address(0), msg.value, bytes32(0));

    }
    
    fallback() external payable {
        // _handleDonation(address(0), msg.value, bytes32(0));
    }

    // function donateEth(bytes32 _attestationId) external payable{
    //     _handleDonation(address(0), msg.value, _attestationId);
    // }

    // function donateErc20(address _token, uint256 _amount, bytes32 _attestationId) external{
    //     _handleDonation(_token, _amount, _attestationId);
    // }

    // function _handleDonation(address _token, uint256 _amount, bytes32 _attestationId) internal {
    //     if(msg.value == 0) revert ZeroValueDonation(msg.sender);
        
    //     if(_token != address(0)){
    //         if(IERC20(_token).allowance(msg.sender, address(this)) < _amount) revert InsufficientAllowance(msg.sender, _token, _amount);
    //         IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    //         tokenBalances[_token] += _amount;
    //         donors[msg.sender][_token] += _amount;
    //         donorAttestaions[msg.sender][_token] = _attestationId;
    //     }else{
    //         tokenBalances[address(0)] += msg.value;
    //         donors[msg.sender][address(0)] += msg.value;
    //         donorAttestaions[msg.sender][address(0)] = _attestationId;
    //     }
        
    //     emit DonationReceived(msg.sender, _token, msg.value);
    // }

    function withdrawValue(address beneficiary, uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount) external onlyVaultFactory returns(bool){
        if(ethAmount > 0) _withdraw(beneficiary, 0, ethAmount);
        if(wethAmount > 0) _withdraw(beneficiary, 1, wethAmount);
        if(usdcAmount > 0) _withdraw(beneficiary, 2, usdcAmount);
        if(usdtAmount > 0) _withdraw(beneficiary, 3, usdtAmount);
    }

    function _withdraw(address _beneficiary, uint8 _token, uint256 _amount) internal {
        if(_token == 0){
            if(address(this).balance < _amount) return;
            payable(_beneficiary).transfer(_amount);
            emit Withdrawal(_beneficiary, _token, _amount);
        }else{
            if(IERC20(tokenAddresses[_token - 1]).balanceOf(address(this)) < _amount) return;
            IERC20(tokenAddresses[_token - 1]).transfer(_beneficiary, _amount);
            emit Withdrawal(_beneficiary, _token - 1, _amount);
        }
    }

}