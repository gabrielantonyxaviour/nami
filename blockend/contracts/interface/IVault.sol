// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IVault{
    function initialize(address _vaultFactory, address[3] memory _tokens) external;
    function withdrawValue(uint256 _salt, address token, address beneficiary, uint256 amount) external returns(bool);
}