import { StateCreator } from "zustand";
import { createKintoSDK, KintoAccountInfo } from "kinto-web-sdk";
import { KYCViewerInfo } from "../type";
interface GlobalState {
  kintoSdk: any;
  accountInfo: KintoAccountInfo | null;
  kycViewerInfo: KYCViewerInfo | null;
  overallDonations: number;
}

interface GlobalActions {
  setAccountInfo: (accountInfo: KintoAccountInfo) => void;
  setOverallDonations: (overallDonations: number) => void;
  setKYCViewerInfo: (kycViewerInfo: KYCViewerInfo) => void;
}

export type GlobalSlice = GlobalState & GlobalActions;

export const initialGlobalState: GlobalState = {
  kintoSdk: createKintoSDK("0xA112c44A6E4DB0E00c58091c6dE1121e49f83Eec"),
  accountInfo: null,
  kycViewerInfo: null,
  overallDonations: 0,
};

export const createGlobalSlice: StateCreator<
  GlobalSlice,
  [],
  [],
  GlobalSlice
> = (set) => ({
  ...initialGlobalState,
  setAccountInfo: (accountInfo) => set({ accountInfo }),
  setKYCViewerInfo: (kycViewerInfo) => set({ kycViewerInfo }),
  setOverallDonations: (overallDonations) => set({ overallDonations }),
});
