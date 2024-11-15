// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {

    string public token_name = "USD Coin";
    string public token_symbol = "USDC";

    constructor() ERC20(token_name, token_symbol) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
