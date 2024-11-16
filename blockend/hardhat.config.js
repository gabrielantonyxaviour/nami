require("@nomicfoundation/hardhat-toolbox");
require("hardhat-dependency-compiler");
require("hardhat-contract-sizer");
require("./tasks");
const { networks } = require("./networks");

const REPORT_GAS =
  process.env.REPORT_GAS?.toLowerCase() === "true" ? true : false;

const SOLC_SETTINGS = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
  viaIR: true,
};
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.8.7",
        settings: SOLC_SETTINGS,
      },
    ],
  },

  networks: {
    ...networks,
  },
  etherscan: {
    apiKey: {
      baseSepolia: networks.baseSepolia.verifyApiKey,
      kinto: networks.kinto.verifyApiKey,
      scrollSepolia: networks.scrollSepolia.verifyApiKey,
      polygonAmoy: networks.polygonAmoy.verifyApiKey,
      sepolia: networks.sepolia.verifyApiKey,
    },
    customChains: [
      {
        network: "kinto",
        chainId: networks.kinto.chainId,
        urls: {
          apiURL: networks.kinto.verifyApiUrl,
          browserURL: networks.kinto.blockExplorer,
        },
      },
      {
        network: "baseSepolia",
        chainId: networks.baseSepolia.chainId,
        urls: {
          apiURL: networks.baseSepolia.verifyApiUrl,
          browserURL: networks.baseSepolia.blockExplorer,
        },
      },
      {
        network: "polygonAmoy",
        chainId: networks.polygonAmoy.chainId,
        urls: {
          apiURL: networks.polygonAmoy.verifyApiUrl,
          browserURL: networks.polygonAmoy.blockExplorer,
        },
      },
      {
        network: "scrollSepolia",
        chainId: networks.scrollSepolia.chainId,
        urls: {
          apiURL: networks.scrollSepolia.verifyApiUrl,
          browserURL: networks.scrollSepolia.blockExplorer,
        },
      },
      {
        network: "sepolia",
        chainId: networks.sepolia.chainId,
        urls: {
          apiURL: networks.sepolia.verifyApiUrl,
          browserURL: networks.sepolia.blockExplorer,
        },
      },
    ],
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
  mocha: {
    timeout: 200000,
  },
};
