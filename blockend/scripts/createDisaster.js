const { ethers, zeroPadBytes } = require("ethers");
const { networks } = require("../networks");
const { Contract } = require("ethers");

const {
  abi: coreAbi,
} = require("../build/artifacts/contracts/NamiCore.sol/NamiCore.json");

require("dotenv").config();

async function main() {
  const core = networks.polygonAmoy.core; // TODO: Chanage core to Kinto

  const provider = new ethers.JsonRpcProvider(networks.polygonAmoy.url);
  const signer = new ethers.Wallet(
    process.env.TEST_PRIVATE_KEY || "",
    provider
  );

  const coreContract = new Contract(networks.polygonAmoy.core, coreAbi, signer);

  const zeroBytes32 = zeroPadBytes("0x", 32);
  const amountInUSD = "925000000000000000000000";

  console.log("Creating Diaster");
  const tx = await coreContract._createDisaster(zeroBytes32, amountInUSD); // TODO: Change to Kinto and Change Nami
  console.log("Created Disaster");
  console.log("Transaction Hash: ", tx.hash);

  console.log("\n View In Explorer...");
  console.log(networks.polygonAmoy.blockExplorer + "/tx/" + tx.hash);
}

main();
