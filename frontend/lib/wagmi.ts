import {
  base,
  baseSepolia,
  polygonAmoy,
  scrollSepolia,
  sepolia,
} from "wagmi/chains"; // add baseSepolia for testing
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
export function getConfig() {
  return getDefaultConfig({
    appName: "Nami",
    appDescription:
      "Discovers global human disasters, collects donations and keeps NGOs accountable",
    appIcon: "https://ai-agent-for-good.vercel.app/logo.png",
    appUrl: "https://ai-agent-for-good.vercel.app",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
    wallets: [
      {
        groupName: "Recommended Wallet",
        wallets: [coinbaseWallet],
      },
      {
        groupName: "Other Wallets",
        wallets: [rainbowWallet, metaMaskWallet],
      },
    ],
    chains: [baseSepolia, polygonAmoy, sepolia, scrollSepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
