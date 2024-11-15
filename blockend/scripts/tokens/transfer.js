const { ethers, zeroPadBytes } = require("ethers");
const { networks } = require("../../networks");
const { Contract } = require("ethers");

const {
  abi: erc20Abi,
} = require("../../build/artifacts/contracts/tokens/USDC.sol/USDC.json");

require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(networks.baseSepolia.url);
  const signer = new ethers.Wallet(
    process.env.TEST_PRIVATE_KEY || "",
    provider
  );

  const coreContract = new Contract(
    networks.baseSepolia.tokens.usdc,
    erc20Abi,
    signer
  );

  console.log("Transferring Tokens...");
  const tx = await coreContract.transfer(
    "0x71B43a66324C7b80468F1eE676E7FCDaF63eB6Ac",
    "1000000000000000000"
  );

  console.log("Transaction Hash: ", tx.hash);

  console.log("\n View In Explorer...");
  console.log(networks.baseSepolia.blockExplorer + "/tx/" + tx.hash);
}

main();
