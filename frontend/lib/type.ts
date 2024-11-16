import { Address } from "viem";

export interface KYCViewerInfo {
  isIndividual: boolean;
  isCorporate: boolean;
  isKYC: boolean;
  isSanctionsSafe: boolean;
  getCountry: string;
  getWalletOwners: Address[];
}

export type Token = {
  address: Address; // The address of the token contract
  chainId: number; // The chain id of the token contract
  decimals: number; // The number of token decimals
  image: string | null; // A string url of the token logo
  name: string;
  symbol: string; // A ticker symbol or shorthand, up to 11 characters
};

export type Disaster = {
  id: number;
  title: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  attestationId: string;
  createdAt: string;
  totalRaisedInUSD: number;
  requiredFundsInUSD: number;
  vaultAddress: string;
  subName: string;
};
