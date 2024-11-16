const { ethers, zeroPadBytes } = require("ethers");
const { networks } = require("../../networks");
const { Contract } = require("ethers");

const {
  abi: erc20Abi,
} = require("../../build/artifacts/contracts/tokens/USDC.sol/USDC.json");

require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(networks.kinto.url);
  const signer = new ethers.Wallet(
    process.env.TEST_PRIVATE_KEY || "",
    provider
  );

  const coreContract = new Contract(
    networks.kinto.tokens.usdt,
    erc20Abi,
    signer
  );

  console.log("Minting Tokens...");
  const tx = await coreContract.mint(
    "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
    "100000000000000000000"
  );

  console.log("Transaction Hash: ", tx.hash);

  console.log("\n View In Explorer...");
  console.log(networks.kinto.blockExplorer + "/tx/" + tx.hash);
}

main();
