const { ethers } = require("ethers");
const { networks } = require("../networks");
const { Contract } = require("ethers");

const {
  abi: coreAbi,
} = require("../build/artifacts/contracts/TestingCore.sol/TestingCore.json");

const {
  abi: vaultFactoryAbi,
} = require("../build/artifacts/contracts/TestingVaultFactory.sol/TestingVaultFactory.json");

require("dotenv").config();

async function main() {
  const nami = "0x0429A2Da7884CA14E53142988D5845952fE4DF6a"; // TODO: Change nami

  let provider = new ethers.JsonRpcProvider(networks.polygonAmoy.url);
  let signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  // const core = new Contract(networks.polygonAmoy.core, coreAbi, signer); // TODO: Change to Kinto

  // console.log("Initializing Core...");

  // let tx = await core.initialize(
  //   networks.baseSepolia.aiClient,
  //   networks.polygonAmoy.vaultFactory
  // ); // TODO: Change to Kinto and Change Nami

  // console.log("Core initialized at: ", tx.hash);
  // console.log(networks.polygonAmoy.blockExplorer + "/tx/" + tx.hash);

  let vaultFactory = new Contract(
    networks.polygonAmoy.vaultFactory,
    vaultFactoryAbi,
    signer
  );

  console.log("Initializing VaultFactory in Polygon...");

  tx = await vaultFactory.initialize(
    networks.polygonAmoy.mailbox,
    networks.polygonAmoy.core, // TODO: Change to Kinto Core
    [
      networks.polygonAmoy.tokens.weth,
      networks.polygonAmoy.tokens.usdc,
      networks.polygonAmoy.tokens.usdt,
    ]
  );

  console.log("VaultFactory initialized at: ", tx.hash);
  console.log(networks.polygonAmoy.blockExplorer + "/tx/" + tx.hash);

  // provider = new ethers.JsonRpcProvider(networks.scrollSepolia.url);
  // signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  // vaultFactory = new Contract(
  //   networks.scrollSepolia.vaultFactory,
  //   vaultFactoryAbi,
  //   signer
  // );

  // tx = await vaultFactory.initialize(
  //   networks.scrollSepolia.mailbox,
  //   networks.polygonAmoy.core, // TODO: Change to Kinto Core
  //   [
  //     networks.scrollSepolia.tokens.weth,
  //     networks.scrollSepolia.tokens.usdc,
  //     networks.scrollSepolia.tokens.usdt,
  //   ]
  // );

  // console.log("VaultFactory initialized at: ", tx.hash);
  // console.log(networks.scrollSepolia.blockExplorer + "/tx/" + tx.hash);

  // console.log("Initializing VaultFactory in Zircuit...");

  // provider = new ethers.JsonRpcProvider(networks.zircuitSepolia.url);
  // signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  // vaultFactory = new Contract(
  //   networks.zircuitSepolia.vaultFactory,
  //   vaultFactoryAbi,
  //   signer
  // );

  // tx = await vaultFactory.initialize(
  //   networks.zircuitSepolia.mailbox,
  //   networks.polygonAmoy.core, // TODO: Change to Kinto Core
  //   [
  //     networks.zircuitSepolia.tokens.weth,
  //     networks.zircuitSepolia.tokens.usdc,
  //     networks.zircuitSepolia.tokens.usdt,
  //   ]
  // );

  // console.log("VaultFactory initialized at: ", tx.hash);
  // console.log(networks.zircuitSepolia.blockExplorer + "/tx/" + tx.hash);

  // console.log("Initializing VaultFactory in Sepolia...");

  // provider = new ethers.JsonRpcProvider(networks.sepolia.url);
  // signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  // vaultFactory = new Contract(
  //   networks.sepolia.vaultFactory,
  //   vaultFactoryAbi,
  //   signer
  // );

  // tx = await vaultFactory.initialize(
  //   networks.sepolia.mailbox,
  //   networks.polygonAmoy.core, // TODO: Change to Kinto Core
  //   [
  //     networks.sepolia.tokens.weth,
  //     networks.sepolia.tokens.usdc,
  //     networks.sepolia.tokens.usdt,
  //   ]
  // );

  // console.log("VaultFactory initialized at: ", tx.hash);
  // console.log(networks.sepolia.blockExplorer + "/tx/" + tx.hash);

  // console.log("Initializing VaultFactory in Base Sepolia...");

  // provider = new ethers.JsonRpcProvider(networks.baseSepolia.url);
  // signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  // vaultFactory = new Contract(
  //   networks.baseSepolia.vaultFactory,
  //   vaultFactoryAbi,
  //   signer
  // );

  // tx = await vaultFactory.initialize(
  //   networks.baseSepolia.mailbox,
  //   networks.polygonAmoy.core, // TODO: Change to Kinto Core
  //   [
  //     networks.baseSepolia.tokens.weth,
  //     networks.baseSepolia.tokens.usdc,
  //     networks.baseSepolia.tokens.usdt,
  //   ]
  // );

  // console.log("VaultFactory initialized at: ", tx.hash);
  // console.log(networks.baseSepolia.blockExplorer + "/tx/" + tx.hash);

  console.log("Done!");
}

main();