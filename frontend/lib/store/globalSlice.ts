import { StateCreator } from "zustand";
import { createKintoSDK, KintoAccountInfo } from "kinto-web-sdk";
import { KINTO_APP_ADDRESS } from "../constants";
import { KYCViewerInfo } from "../type";
interface GlobalState {
  kintoSdk: any;
  accountInfo: KintoAccountInfo | null;
  kycViewerInfo: KYCViewerInfo | null;
}

interface GlobalActions {
  setAccountInfo: (accountInfo: KintoAccountInfo) => void;
  setKYCViewerInfo: (kycViewerInfo: KYCViewerInfo) => void;
}

export type GlobalSlice = GlobalState & GlobalActions;

export const initialGlobalState: GlobalState = {
  kintoSdk: createKintoSDK(KINTO_APP_ADDRESS),
  accountInfo: null,
  kycViewerInfo: null,
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
});
