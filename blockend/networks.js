require("@chainlink/env-enc").config();

const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 3;

const PRIVATE_KEY = process.env.TEST_PRIVATE_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

const accounts = [];
if (PRIVATE_KEY) {
  accounts.push(PRIVATE_KEY);
}

const priceFeedIds = [
  "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  "0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6",
  "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
  "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
];

const networks = {
  baseSepolia: {
    url: "https://base-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: process.env.BASESCAN_API_KEY || "UNSET",
    chainId: 84532,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "ETH",
    verifyApiUrl: "https://base-sepolia.blockscout.com/api",
    blockExplorer: "https://base-sepolia.blockscout.com",
    mailbox: "0xB127bd20bf4c7723148B588e10B5d3A1E2E86242",
    isp: "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD",
    vaultFactory: "0x1C06b94e180B3215042fcbC8b389F835A0B5aFa5",
    pythOracle: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
    aiClient: "0x80db663024Ef080De87d2A1255ef54aa88b723b4",
    createDisasterSchemaId: "0x3d5",
    fundDisasterSchemaId: "0x3d2",
    tokens: {
      weth: "0xBE3D118760d9be86688D88929c2122cEc9Ec4635",
      usdc: "0x4393eD225A2F48C27eA6CeBec139190cb8EA8A5F",
      usdt: "0x9FafD4cB45410a931b538F1D97EFCC28b147E449",
    },
  },
  kinto: {
    url: "https://rpc.kinto-rpc.com",
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: "RADNOM",
    chainId: 7887,
    confirmations: 2,
    nativeCurrencySymbol: "ETH",
    blockExplorer: "https://explorer.kinto.xyz/",
    verifyApiUrl: "https://explorer.kinto.xyz/api",
    mailbox: "0xA112c44A6E4DB0E00c58091c6dE1121e49f83Eec",
    vaultFactory: "",
    tokens: {
      weth: "0x86c207ebF3aE9e9A93B9a045360a8f5Fc983C777",
      usdc: "0x30DFfC0693bb1bBd756bDFFdc8df5F56cc2d30C2",
      usdt: "0x35BFcbcFEb65db335e65256690677eF26fE8da88",
    },
  },
  polygonAmoy: {
    url: "https://rpc-amoy.polygon.technology",
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: POLYGONSCAN_API_KEY,
    chainId: 80002,
    confirmations: 2,
    nativeCurrencySymbol: "POL",
    blockExplorer: "https://amoy.polygonscan.com",
    verifyApiUrl: "https://api-amoy.polygonscan.com/api",
    mailbox: "0x9288277372982b74C174132B5f43B9b1900855Fd",
    pythOracle: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C", // TODO: It should be in Kinto
    core: "0xb1515f97f08046Cf041d978068f66986Ab750FBC", // TODO: It should be in Kinto
    vaultFactory: "0xB7101989eAc2808F8319D1465D18678343FFe21D",
    tokens: {
      weth: "0x094605EB62e5AF67b9b03f51f313C747C4c7dE66",
      usdc: "0xD4171D5a25B3A684d1952Dd8141fA27911004f12",
      usdt: "0x79E72dCc5beEE7F288c7e73C5052FEEBb9C491d9",
    },
  },
  scrollSepolia: {
    url: "https://sepolia-rpc.scroll.io",
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: "RANDOM",
    chainId: 534351,
    confirmations: 2,
    nativeCurrencySymbol: "ETH",
    blockExplorer: "https://scroll-sepolia.blockscout.com",
    verifyApiUrl: "https://scroll-sepolia.blockscout.com/api",
    mailbox: "0xdBFf454c77307ccaA6c2762F9f515559f6d728D3",
    vaultFactory: "0x79E72dCc5beEE7F288c7e73C5052FEEBb9C491d9",
    tokens: {
      weth: "0x582384603173D650D634c52dD37771cFE439A888",
      usdc: "0xdE6d2CaE1BA329c0a09c21Ac6Aa5958A7d355971",
      usdt: "0x094605EB62e5AF67b9b03f51f313C747C4c7dE66",
    },
  },
  zircuitSepolia: {
    url: "https://zircuit1-testnet.p2pify.com",
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: process.env.ZIRCUIT_API_KEY || "UNSET",
    chainId: 48899,
    confirmations: 2,
    nativeCurrencySymbol: "ETH",
    blockExplorer: "https://explorer.testnet.zircuit.com/",
    verifyApiUrl:
      "https://explorer.testnet.zircuit.com/api/contractVerifyHardhat",
    mailbox: "0xEa8b3dbDAe7779229E8e075FBdf61D0E0a63fb75",
    vaultFactory: "0x582384603173D650D634c52dD37771cFE439A888",
    tokens: {
      weth: "0x35BFcbcFEb65db335e65256690677eF26fE8da88",
      usdc: "0xf507ae166214dF4bD1851B955BE608d7419542e3",
      usdt: "0xC3E60b8424274d30ec4e7D1f34C6b592fB1D9FC5",
    },
  },
  sepolia: {
    url: "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: "RANDOM",
    chainId: 11155111,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "ETH",
    blockExplorer: "https://eth-sepolia.blockscout.com/",
    verifyApiUrl: "https://eth-sepolia.blockscout.com/api",
    mailbox: "0xb2B892c9E8A1137Ae66f508c557a87Fda937FB81",
    vaultFactory: "0x64CCe32fe7AcDBA2566AdDf9eEF16Ba4434c3E34",

    tokens: {
      weth: "0xf9F24Ca70e087CA30D8A1AB45c0cd502A2B3B370",
      usdc: "0x04D99018f10F500427c76dab28752f04d93c6389",
      usdt: "0xE9EA89276C4CB5945BB65F8b264fbDF7235E6Da9",
    },
  },
};

module.exports = {
  networks,
  priceFeedIds,
};