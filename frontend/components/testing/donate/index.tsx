"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { useAccount } from "wagmi";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownFundLink,
  WalletDropdownLink,
  WalletDropdownDisconnect,
  WalletDefault,
} from "@coinbase/onchainkit/wallet";
import {
  LifecycleStatus,
  Transaction,
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { baseSepolia } from "viem/chains";
import { useCallback } from "react";
import { contracts } from "@/lib/constants";

export default function Donate() {
  const { address } = useAccount();
  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);
  return (
    <div className="w-[800px] mx-auto h-screen flex flex-col items-center justify-center">
      <Image
        src={"/logo.png"}
        width={50}
        height={50}
        alt="nami"
        className="rounded-full"
      />
      <p className="py-1 font-bold">Flood in Chiang Mai</p>
      <p className="pb-4">DONATE TO THE CAUSE</p>
      <div className="flex flex-col py-2 justify-between items-center">
        <Image
          src={"/chains/eth.png"}
          width={30}
          height={30}
          alt="nami"
          className="rounded-full"
        />
        <p>chiangmai.nami.eth</p>
      </div>

      <div className="flex flex-col py-2 justify-between items-center">
        <Image
          src={"/chains/base.png"}
          width={30}
          height={30}
          alt="nami"
          className="rounded-full"
        />
        <p>chiangmai.nami.base.eth</p>
      </div>
      <div className="flex flex-col py-4 justify-between space-y-2 items-center">
        <div className="flex space-x-2">
          <Image
            src={"/chains/pol.png"}
            width={30}
            height={30}
            alt="nami"
            className="rounded-full"
          />
          <Image
            src={"/chains/kinto.jpg"}
            width={30}
            height={30}
            alt="nami"
            className="rounded-full"
          />
          <Image
            src={"/chains/gnosis.png"}
            width={30}
            height={30}
            alt="nami"
            className="rounded-full"
          />
          <Image
            src={"/chains/flow.jpg"}
            width={30}
            height={30}
            alt="nami"
            className="rounded-full"
          />
          <Image
            src={"/chains/scroll.png"}
            width={30}
            height={30}
            alt="nami"
            className="rounded-full"
          />
        </div>
        <p>0x5A6B842891032d702517a4E52ec38eE561063539</p>
      </div>
      <div className="flex flex-col py-4 justify-between space-y-2 items-center">
        <div className="flex space-x-4 items-center">
          <Wallet>
            <ConnectWallet className="" withWalletAggregator>
              <Avatar
                className="h-7 w-7"
                address={address}
                loadingComponent={
                  <div className="h-full w-full">
                    <img src="/loading.gif" alt="loading" className="w-" />
                  </div>
                }
                defaultComponent={
                  <div className="h-full w-full">
                    <img src="/logo.png" alt="nami" />
                  </div>
                }
              />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name className="dark:text-white text-black" />
                <Address className="text-muted-foreground" />
                <EthBalance className="text-muted-foreground" />
              </Identity>
              <WalletDropdownBasename />
              <WalletDropdownLink
                icon="wallet"
                href="https://keys.coinbase.com"
              >
                Wallet
              </WalletDropdownLink>
              <WalletDropdownFundLink />
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
          {address && (
            <Transaction
              capabilities={{
                paymasterService: {
                  url: process.env.PAYMASTER_AND_BUNDLER_ENDPOINT || "",
                },
              }}
              chainId={baseSepolia.id}
              contracts={contracts}
              onStatus={handleOnStatus}
              className="p-4"
            >
              <TransactionButton text="Donate" className="bg-primary" />
              <TransactionSponsor />
              {/* <TransactionStatus>
                <TransactionStatusLabel />
                <TransactionStatusAction />
              </TransactionStatus> */}
            </Transaction>
          )}
        </div>

        <p>----- or -----</p>
        <Button variant={"ghost"} className="flex space-x-2" onClick={() => {}}>
          <Image
            src={"/coinbase.png"}
            width={30}
            height={30}
            alt="coinbase"
            className="rounded-full"
          />
          <p>Checkout with Coinbase</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex space-x-2"
          onClick={() => {
            alert(
              "The Gnosis docs says that this feature is coming soon. Should be available during the hack, it not we ditch it."
            );
          }}
        >
          <Image
            src={"/chains/gnosis.png"}
            width={30}
            height={30}
            alt="coinbase"
            className="rounded-full"
          />
          <p>Checkout with Gnois Pay</p>
        </Button>
      </div>
    </div>
  );
}
