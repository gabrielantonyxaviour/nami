// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


interface IVaultFactory{

    enum Token {
        NATIVE,
        WETH,
        USDC,
        USDT
    }

    function createVault(uint256 _salt) external returns(address deployed);
    function claimFunds(uint256 _disasterId, address beneficiary, uint256 ethAmount, uint256 wethAmount, uint256 usdcAmount, uint256 usdtAmount) external;

    function getVaultAddress(uint256 _disasterId) external view returns(address);
}