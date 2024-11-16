const { networks } = require("../networks");
const { ethers, Contract } = require("ethers");

const {
  abi: coreAbi,
} = require("../build/artifacts/contracts/NamiCore.sol/NamiCore.json");

const {
  abi: vaultFactoryAbi,
} = require("../build/artifacts/contracts/NamiVaultFactory.sol/NamiVaultFactory.json");

require("dotenv").config();

async function main() {
  let provider = new ethers.JsonRpcProvider(networks.kinto.url);
  let signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  const core = new Contract(networks.kinto.core, coreAbi, signer);

  // console.log("Initializing Core...");

  // let tx = await core.initialize(
  //   networks.baseSepolia.aiClient,
  //   networks.baseSepolia.vaultFactory
  // );

  // console.log("Core initialized at: ", tx.hash);
  // console.log(networks.kinto.blockExplorer + "/tx/" + tx.hash);

  let vaultFactory = new Contract(
    networks.kinto.vaultFactory,
    vaultFactoryAbi,
    signer
  );

  console.log("Initializing VaultFactory in Kinto...");

  tx = await vaultFactory.initialize(
    networks.kinto.mailbox,
    networks.kinto.core,
    [
      networks.kinto.tokens.weth,
      networks.kinto.tokens.usdc,
      networks.kinto.tokens.usdt,
    ]
  );

  console.log("VaultFactory initialized at: ", tx.hash);
  console.log(networks.kinto.blockExplorer + "/tx/" + tx.hash);

  console.log("Initializing VaultFactory in Scroll Sepolia...");

  provider = new ethers.JsonRpcProvider(networks.scrollSepolia.url);
  signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  vaultFactory = new Contract(
    networks.scrollSepolia.vaultFactory,
    vaultFactoryAbi,
    signer
  );

  tx = await vaultFactory.initialize(
    networks.scrollSepolia.mailbox,
    networks.kinto.core,
    [
      networks.scrollSepolia.tokens.weth,
      networks.scrollSepolia.tokens.usdc,
      networks.scrollSepolia.tokens.usdt,
    ]
  );

  console.log("VaultFactory initialized at: ", tx.hash);
  console.log(networks.scrollSepolia.blockExplorer + "/tx/" + tx.hash);

  console.log("Initializing VaultFactory in Sepolia...");

  provider = new ethers.JsonRpcProvider(networks.sepolia.url);
  signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  vaultFactory = new Contract(
    networks.sepolia.vaultFactory,
    vaultFactoryAbi,
    signer
  );

  tx = await vaultFactory.initialize(
    networks.sepolia.mailbox,
    networks.kinto.core,
    [
      networks.sepolia.tokens.weth,
      networks.sepolia.tokens.usdc,
      networks.sepolia.tokens.usdt,
    ]
  );

  console.log("VaultFactory initialized at: ", tx.hash);
  console.log(networks.sepolia.blockExplorer + "/tx/" + tx.hash);

  console.log("Initializing VaultFactory in Base Sepolia...");

  provider = new ethers.JsonRpcProvider(networks.baseSepolia.url);
  signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  vaultFactory = new Contract(
    networks.baseSepolia.vaultFactory,
    vaultFactoryAbi,
    signer
  );

  tx = await vaultFactory.initialize(
    networks.baseSepolia.mailbox,
    networks.kinto.core,
    [
      networks.baseSepolia.tokens.weth,
      networks.baseSepolia.tokens.usdc,
      networks.baseSepolia.tokens.usdt,
    ]
  );

  console.log("VaultFactory initialized at: ", tx.hash);
  console.log(networks.baseSepolia.blockExplorer + "/tx/" + tx.hash);

  console.log("Initializing VaultFactory in Polygon Amoy...");

  provider = new ethers.JsonRpcProvider(networks.polygonAmoy.url);
  signer = new ethers.Wallet(process.env.TEST_PRIVATE_KEY || "", provider);

  vaultFactory = new Contract(
    networks.polygonAmoy.vaultFactory,
    vaultFactoryAbi,
    signer
  );

  tx = await vaultFactory.initialize(
    networks.polygonAmoy.mailbox,
    networks.kinto.core,
    [
      networks.polygonAmoy.tokens.weth,
      networks.polygonAmoy.tokens.usdc,
      networks.polygonAmoy.tokens.usdt,
    ]
  );

  console.log("VaultFactory initialized at: ", tx.hash);
  console.log(networks.polygonAmoy.blockExplorer + "/tx/" + tx.hash);
  console.log("Done!");
}

main();
