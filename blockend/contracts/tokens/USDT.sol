// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20 {

    string public token_name = "Tether USD";
    string public token_symbol = "USDT";

    constructor() ERC20(token_name, token_symbol) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
