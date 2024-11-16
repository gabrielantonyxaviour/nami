const { networks } = require("../networks");
const { ethers, Contract } = require("ethers");

const {
  abi: aiClientAbi,
} = require("../build/artifacts/contracts/NamiAiClient.sol/NamiAiClient.json");

require("dotenv").config();

async function main() {
  let provider = new ethers.JsonRpcProvider(networks.baseSepolia.url);
  let signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  const core = new Contract(networks.baseSepolia.aiClient, aiClientAbi, signer);

  const tx = await core.allowlistAiAgent(
    "0x0429A2Da7884CA14E53142988D5845952fE4DF6a"
  );

  console.log("AiAgent set at: ", tx.hash);
  console.log(networks.baseSepolia.blockExplorer + "/tx/" + tx.hash);

  console.log("Done!");
}

main();
