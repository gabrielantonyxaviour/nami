// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "fhevm/lib/TFHE.sol";

interface IZoroCore {
      struct Game {
        uint256 threadId;
        uint256 lastMoveTimestamp;
        uint32 srcChain;
        uint8 currentTurn;
        uint8 playerGoals;
        uint8 aiGoals;
        uint8 playerStrikes;
        uint8 aiStrikes;
        address player;
        euint16[] deck;
        euint16[] player1Hand;
        euint16[] player2Hand;
        euint16 player1EncryptedMove;
        euint16 player2EncryptedMove;
        bool isActive;
    }

    struct Character {
        uint16 id;
        uint8 pace;
        uint8 attack;
        uint8 passing;
        uint8 defence;
        address teamFanTokenAddress;
        string metadata;
    }

    struct Team {
        address teamFanTokenAddress;
        string metadata;
    }
}