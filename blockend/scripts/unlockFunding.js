const { ethers, zeroPadBytes } = require("ethers");
const { networks, priceFeedIds } = require("../networks");
const { Contract } = require("ethers");

const {
  abi: coreAbi,
} = require("../build/artifacts/contracts/NamiCore.sol/NamiCore.json");

require("dotenv").config();

async function main() {
  const core = networks.polygonAmoy.core; // TODO: Chanage core to Kinto

  const url = `https://hermes.pyth.network/v2/updates/price/latest?ids%5B%5D=${priceFeedIds[0]}&ids%5B%5D=${priceFeedIds[1]}&ids%5B%5D=${priceFeedIds[2]}&ids%5B%5D=${priceFeedIds[3]}`;
  const response = await fetch(url);

  console.log("Fetching latest price...");
  const data = await response.json();
  let pricesInWei = [];

  for (i in data.parsed) {
    pricesInWei.push(
      ethers.parseUnits(data.parsed[i].price.price, 18) /
        BigInt((10 ** (-1 * data.parsed[i].price.expo)).toString())
    );
  }

  console.log("Prices in WEI");
  console.log(pricesInWei);
  console.log("PRICES PROOF TO BE SEND ON CHAIN");
  console.log(data.binary.data);

  // const provider = new ethers.JsonRpcProvider(networks.polygonAmoy.url);
  // const signer = new ethers.Wallet(
  //   process.env.TEST_PRIVATE_KEY || "",
  //   provider
  // );

  // const coreContract = new Contract(networks.polygonAmoy.core, coreAbi, signer);

  // console.log("\n View In Explorer...");
  // console.log(networks.polygonAmoy.blockExplorer + "/tx/" + tx.hash);
}

main();
