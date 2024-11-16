// import { baseSepolia, polygonAmoy, sepolia } from "viem/chains";
// import { Agent, Chain } from "./type";

import { Chain, defineChain, zeroAddress } from "viem";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Disaster, Token } from "./type";
import {
  baseSepolia,
  kinto,
  polygonAmoy,
  scrollSepolia,
  sepolia,
  zircuitTestnet,
} from "viem/chains";

export const idToChain: Record<number, Chain> = {
  [baseSepolia.id]: baseSepolia,
  [polygonAmoy.id]: polygonAmoy,
  [kinto.id]: kinto,
  [zircuitTestnet.id]: zircuitTestnet,
  [scrollSepolia.id]: scrollSepolia,
  [sepolia.id]: sepolia,
};

export const idToChainInfo: Record<
  number,
  {
    id: number;
    name: string;
    chainId: number;
    image: string;
    rpcUrl: string;
    blockExplorer: string;
  }
> = {
  [baseSepolia.id]: {
    id: 1,
    name: baseSepolia.name,
    chainId: baseSepolia.id,
    image: "/chains/base.png",
    rpcUrl:
      "https://api.developer.coinbase.com/rpc/v1/base-sepolia/" +
      process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY,
    blockExplorer: "https://base-sepolia.blockscout.com",
  },
  [polygonAmoy.id]: {
    id: 2,
    name: polygonAmoy.name,
    chainId: polygonAmoy.id,
    image: "/chains/pol.png",
    rpcUrl:
      "https://polygon-amoy.g.alchemy.com/v2/" +
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    blockExplorer: "https://amoy.polygonscan.com",
  },
  [kinto.id]: {
    id: 3,
    name: kinto.name,
    chainId: kinto.id,
    image: "/chains/kinto.jpg",
    rpcUrl: "https://kinto-mainnet.calderachain.xyz/http",
    blockExplorer: "https://explorer.kinto.xyz",
  },
  [zircuitTestnet.id]: {
    id: 4,
    name: zircuitTestnet.name,
    chainId: zircuitTestnet.id,
    image: "/chains/zircuit.jpg",
    rpcUrl: "https://zircuit1-testnet.p2pify.com",
    blockExplorer: "https://explorer.testnet.zircuit.com/",
  },
  [scrollSepolia.id]: {
    id: 5,
    name: scrollSepolia.name,
    chainId: scrollSepolia.id,
    image: "/chains/scroll.png",
    rpcUrl:
      "https://scroll-sepolia.g.alchemy.com/v2/" +
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    blockExplorer: "https://sepolia.scrollscan.com/",
  },
  [sepolia.id]: {
    id: 6,
    name: sepolia.name,
    chainId: sepolia.id,
    image: "/chains/eth.png",
    rpcUrl:
      "https://eth-sepolia.g.alchemy.com/v2/" +
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    blockExplorer: "https://eth-sepolia.blockscout.com/",
  },
};

// export const chains: Chain[] = [
//   {
//     name: "Etheruem Sepolia",
//     chainId: sepolia.id,
//     image: "/chains/eth.png",
//   },

//   { name: "Polygon Amoy", chainId: polygonAmoy.id, image: "/chains/pol.png" },
//   { name: "Base Sepolia", chainId: baseSepolia.id, image: "/chains/base.png" },
// ];

export const MPC_CONTRACT = "v1.signer-prod.testnet";
export const GOJO_CONTRACT = "gojo-protocol.testnet";
export const GOJO_TOKEN_CONTRACT = "token.gojo-protocol.testnet";
export const DERIVATION_PATH = "gojo";

export const MAX_GAS = "300000000000000";
export const TWO_HUNDRED_GAS = "200000000000000";
export const THIRTY_GAS = "30000000000000";
export const ALT_CODE = ` pragma solidity ^0.8.0;

              contract Counter {
                  uint256 public count;

                  event CountChanged(uint256 newCount);

                  constructor() {
                      count = 0;
                  }

                  function increment() public {
                      count += 1;
                      emit CountChanged(count);
                  }

                  function decrement() public {
                      require(count > 0, "Counter: count can't go below zero");
                      count -= 1;
                      emit CountChanged(count);
                  }

                  function getCount() public view returns (uint256) {
                      return count;
                  }
              }`;

export const AI_HOSTED_URL = "https://gojo-protocol.onrender.com/chat";
export const AI_LOCAL_URL = "http://127.0.0.1:8000/chat";
export const COMPILE_HOSTED_URL =
  "https://gojo-compile-server.onrender.com/chat";
export const COMPILE_LOCAL_URL = "http://localhost:3001/compile";

export const KINTO_APP_ADDRESS = "0x108A91edD1329e17409A86b54D4204A102534ec3";
export const KINTO_APP_ABI = [
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const wethToken: Token = {
  address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  chainId: 1,
  decimals: 18,
  image: "https://etherscan.io/token/images/weth_28.png",
  name: "Wrapped Ether",
  symbol: "WETH",
};

export const usdcToken: Token = {
  address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  chainId: 1,
  decimals: 6,
  image: "https://etherscan.io/token/images/usdc_28.png",
  name: "USD Coin",
  symbol: "USDC",
};
export const ethToken: Token = {
  address: zeroAddress,
  chainId: 1,
  decimals: 18,
  image: "https://etherscan.io/token/images/ethereum_28.png",
  name: "Ether",
  symbol: "ETH",
};
export const degenToken: Token = {
  address: "0x7f3edcdd180d6b3c721e1eae0f6a8e9baf6f6e9a",
  chainId: 1,
  decimals: 18,
  image: "https://etherscan.io/token/images/degen_32.png",
  name: "Degen Token",
  symbol: "DEGEN",
};

const clickContractAddress = "0x67c97D1FB8184F038592b2109F854dfb09C77C75";
const clickContractAbi = [
  {
    type: "function",
    name: "click",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export const contracts: any = [
  {
    address: clickContractAddress,
    abi: clickContractAbi,
    functionName: "click",
    args: [],
  },
];

export const mapsStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#212121" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#4d8dff" }],
  },
  {
    featureType: "road",
    stylers: [{ color: "#000000" }],
  },
];

export const disasters: Disaster[] = [
  {
    id: 1,
    title: "Floods in Bangkok",
    images: ["/disasters/bangkok.png"],
    coordinates: {
      lat: 13.7563,
      lng: 100.5018,
    },
    description:
      "Severe monsoon flooding has inundated large parts of Bangkok, affecting millions of residents. Critical infrastructure and homes are underwater, requiring immediate humanitarian assistance for evacuation, emergency shelter, and clean water distribution.",
    attestationId: "onchain_evm_84532_0xb23",
    createdAt: "2024-11-08T14:30:00Z",
    totalRaisedInUSD: 245000,
    requiredFundsInUSD: 800000,
    vaultAddress: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
    subName: "bangkok.nami.eth",
  },
  {
    id: 2,
    title: "Wildfire in Brazil",
    images: ["/disasters/brazil.png"],

    coordinates: {
      lat: -3.7436,
      lng: -73.2516,
    },
    description:
      "Massive wildfires are ravaging the Amazon rainforest, threatening indigenous communities and critical wildlife habitats. Emergency funds needed for firefighting efforts, community relocation, and environmental preservation measures.",
    attestationId: "onchain_evm_84532_0xb23",
    createdAt: "2024-11-09T10:15:00Z",
    totalRaisedInUSD: 378000,
    requiredFundsInUSD: 1200000,
    vaultAddress: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
    subName: "brazil.nami.eth",
  },
  {
    id: 3,
    title: "Earthquake in Tokyo",
    images: ["/disasters/tokyo.png"],

    coordinates: {
      lat: 35.6762,
      lng: 139.6503,
    },
    description:
      "A 7.2 magnitude earthquake has struck the Greater Tokyo Area, causing significant structural damage and disrupting essential services. Immediate support required for search and rescue operations, temporary housing, and infrastructure stabilization.",
    attestationId: "onchain_evm_84532_0xb23",
    createdAt: "2024-11-07T03:45:00Z",
    totalRaisedInUSD: 892000,
    requiredFundsInUSD: 2000000,
    vaultAddress: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
    subName: "tokyo.nami.eth",
  },
  {
    id: 4,
    title: "Typhoon in Vietnam",
    images: ["/disasters/vietnam.png"],

    coordinates: {
      lat: 21.0285,
      lng: 105.8542,
    },
    description:
      "Super Typhoon has made landfall in northern Vietnam, causing widespread flooding and wind damage. Coastal communities are severely impacted, with urgent needs for emergency shelter, food supplies, and medical assistance.",
    attestationId: "onchain_evm_84532_0xb23",
    createdAt: "2024-11-10T08:20:00Z",
    totalRaisedInUSD: 167000,
    requiredFundsInUSD: 650000,
    vaultAddress: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
    subName: "typhoon.nami.eth",
  },
];

export const GRAPH_CLIENT_URL = "http://127.0.0.1:4000/graphql";

export const GET_BALANCES_QUERY = gql`
  query GetBalances($address: String!) {
    kintoBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    polBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    ethBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    scrollBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    baseBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
  }
`;

export const GET_DISASTERS_BY_ADDRESS_QUERY = gql`
  query GetDisasterByAddress(
    $vault: Bytes!
    $to: String!
    $tokenSymbol: String
    $chain: String
    $baseOrderBy: baseTransfer_orderBy
    $polygonOrderBy: polTransfer_orderBy
    $ethereumOrderBy: ethTransfer_orderBy
    $kintoOrderBy: kintoTransfer_orderBy
    $scrollOrderBy: scrollTransfer_orderBy
    $orderDirection: OrderDirection
  ) {
    disasterDescriptives(where: { vaultAddress: $vault }) {
      id
      name
      description
      disasterType
      location
      createdAt
      fundsNeeded
      ensName
      baseName
      vaultAddress
      attestationId
      transactionHash
      hyperlaneMessageId
      totalFundsReleased
      totalBeneficiaries
      fundReleases {
        id
        beneficiary {
          id
          name
          totalAmountReceived
        }
        attestationId
        comments
        amountInUSD
        hyperlaneMessageId
        transactionHash
        claims {
          chainId
          tokens
          amounts
        }
      }
    }

    baseTransfers(
      where: { to: $to }
      orderBy: $baseOrderBy
      orderDirection: $orderDirection
    ) {
      id
      token {
        id
        name
        symbol
      }
      from {
        id
      }
      to {
        id
      }
      amount
      blockNumber
      timestamp
      transactionHash
    }

    ethTransfers(
      where: { to: $to }
      orderBy: $ethereumOrderBy
      orderDirection: $orderDirection
    ) {
      id
      token {
        id
        name
        symbol
      }
      from {
        id
      }
      to {
        id
      }
      amount
      blockNumber
      timestamp
      transactionHash
    }

    polTransfers(
      where: { to: $to }
      orderBy: $polygonOrderBy
      orderDirection: $orderDirection
    ) {
      id
      token {
        id
        name
        symbol
      }
      from {
        id
      }
      to {
        id
      }
      amount
      blockNumber
      timestamp
      transactionHash
    }

    kintoTransfers(
      where: { to: $to }
      orderBy: $kintoOrderBy
      orderDirection: $orderDirection
    ) {
      id
      token {
        id
        name
        symbol
      }
      from {
        id
      }
      to {
        id
      }
      amount
      blockNumber
      timestamp
      transactionHash
    }

    scrollTransfers(
      where: { to: $to }
      orderBy: $scrollOrderBy
      orderDirection: $orderDirection
    ) {
      id
      token {
        id
        name
        symbol
      }
      from {
        id
      }
      to {
        id
      }
      amount
      blockNumber
      timestamp
      transactionHash
    }
  }
`;

export const GET_DISASTERS_QUERY = gql`
  query (
    $orderBy: disasterDescriptive_orderBy!
    $orderDirection: OrderDirection!
  ) {
    disasters {
      id
      transactionHash
      totalFundingAmount
    }
    disasterDescriptives(orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      name
      description
      disasterType
      location
      createdAt
      fundsNeeded
      attestationId
      hyperlaneMessageId
      transactionHash
    }
  }
`;

export const graphClient = new ApolloClient({
  uri: GRAPH_CLIENT_URL,
  cache: new InMemoryCache(),
});
