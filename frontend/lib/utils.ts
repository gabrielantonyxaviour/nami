import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Address, Chain, createPublicClient, getContract, http } from "viem";
import { baseSepolia, kinto, polygonAmoy, sepolia } from "viem/chains";
import { Disaster, KYCViewerInfo } from "./type";
import { kintoContracts } from "./kintoContracts";
import { KintoAccountInfo } from "kinto-web-sdk";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedNumber(num: number): string {
  if (Math.abs(num) >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.?0+$/, "") + "m";
  } else if (Math.abs(num) >= 1_000) {
    return (num / 1_000).toFixed(2).replace(/\.?0+$/, "") + "k";
  } else {
    return num.toString();
  }
}
export function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

const NEXT_PUBLIC_ALCHEMY_API_KEY =
  process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

export const sepoliaPublicClient = createPublicClient({
  chain: sepolia,
  transport: http(
    "https://eth-sepolia.g.alchemy.com/v2/" + NEXT_PUBLIC_ALCHEMY_API_KEY
  ),
});

export const polygonPublicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(
    "https://polygon-amoy.g.alchemy.com/v2/" + NEXT_PUBLIC_ALCHEMY_API_KEY
  ),
});
export const basePublicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(
    "https://base-sepolia.g.alchemy.com/v2/" + NEXT_PUBLIC_ALCHEMY_API_KEY
  ),
});

export const getPublicClient = (chainId: number) => {
  switch (chainId) {
    case sepolia.id:
      return sepoliaPublicClient;
    case polygonAmoy.id:
      return polygonPublicClient;
    case baseSepolia.id:
      return basePublicClient;
    default:
      return sepoliaPublicClient;
  }
};

export const getChainRpcAndExplorer = (
  chainId: number
): { rpcUrl: string; blockExplorer: string } => {
  switch (chainId) {
    case sepolia.id:
      return {
        rpcUrl:
          "https://eth-sepolia.g.alchemy.com/v2/" + NEXT_PUBLIC_ALCHEMY_API_KEY,
        blockExplorer: sepolia.blockExplorers?.default.url,
      };
    case polygonAmoy.id:
      return {
        rpcUrl:
          "https://polygon-amoy.g.alchemy.com/v2/" +
          NEXT_PUBLIC_ALCHEMY_API_KEY,
        blockExplorer: polygonAmoy.blockExplorers?.default.url,
      };
    case baseSepolia.id:
      return {
        rpcUrl:
          "https://base-sepolia.g.alchemy.com/v2/" +
          NEXT_PUBLIC_ALCHEMY_API_KEY,
        blockExplorer: baseSepolia.blockExplorers?.default.url,
      };
    default:
      return {
        rpcUrl:
          "https://eth-sepolia.g.alchemy.com/v2/" + NEXT_PUBLIC_ALCHEMY_API_KEY,
        blockExplorer: sepolia.blockExplorers?.default.url,
      };
  }
};

export async function fetchKYCViewerInfo({
  accountInfo,
}: {
  accountInfo: KintoAccountInfo;
}): Promise<KYCViewerInfo | null> {
  if (!accountInfo.walletAddress) return null;

  const client = createPublicClient({
    chain: kinto,
    transport: http(),
  });
  const kycViewer = getContract({
    address: kintoContracts.contracts.KYCViewer.address as Address,
    abi: kintoContracts.contracts.KYCViewer.abi,
    client: { public: client },
  });

  try {
    const [
      isIndividual,
      isCorporate,
      isKYC,
      isSanctionsSafe,
      getCountry,
      getWalletOwners,
    ] = await Promise.all([
      kycViewer.read.isIndividual([accountInfo.walletAddress]),
      kycViewer.read.isCompany([accountInfo.walletAddress]),
      kycViewer.read.isKYC([accountInfo.walletAddress]),
      kycViewer.read.isSanctionsSafe([accountInfo.walletAddress]),
      kycViewer.read.getCountry([accountInfo.walletAddress]),
      kycViewer.read.getWalletOwners([accountInfo.walletAddress]),
    ]);

    return {
      isIndividual,
      isCorporate,
      isKYC,
      isSanctionsSafe,
      getCountry,
      getWalletOwners,
    } as KYCViewerInfo;
  } catch (error) {
    console.error("Failed to fetch KYC viewer info:", error);
    return null;
  }
}

export function formatDate(isoString: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(isoString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export const sortDisastersByTotalRaisedAsc = (
  disasters: Disaster[]
): Disaster[] => {
  return disasters.sort((a, b) => a.totalRaisedInUSD - b.totalRaisedInUSD);
};

// Sort in descending order by totalRaisedInUSD
export const sortDisastersByTotalRaisedDesc = (
  disasters: Disaster[]
): Disaster[] => {
  return disasters.sort((a, b) => b.totalRaisedInUSD - a.totalRaisedInUSD);
};

// Sort in descending order by createdAt
export const sortDisastersByCreatedAtDesc = (
  disasters: Disaster[]
): Disaster[] => {
  return disasters.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// Sort in ascending order by createdAt
export const sortDisastersByCreatedAtAsc = (
  disasters: Disaster[]
): Disaster[] => {
  return disasters.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
};

export function timeAgo(isoTimestamp: string): string {
  const now = new Date();
  const date = new Date(isoTimestamp);
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60)
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60)
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12)
    return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;

  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
}
