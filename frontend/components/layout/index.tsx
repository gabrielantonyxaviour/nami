"use client";

import Image from "next/image";
import { useState } from "react";
import ToggleTheme from "../ui/custom/toggle-theme";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useRouter } from "next/navigation";
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
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return !loading ? (
    <div className="h-screen flex flex-col w-screen select-text">
      <div className="flex justify-between p-4">
        <div
          className="flex space-x-2 items-center cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={"/logo.png"}
            height={40}
            width={40}
            alt="logo"
            className="rounded-full"
          />
          <p className="font-light text-2xl nouns tracking-widest">NAMI</p>
        </div>
        <div className="flex space-x-2 items-center">
          <Link
            className={`${buttonVariants({
              variant: "ghost",
              size: "sm",
            })} rounded-xl sen`}
            href={"/donate"}
          >
            Campaigns
          </Link>
          <Wallet className="text-sm sen">
            <ConnectWallet className="sen py-2">
              <Avatar className="h-6 w-6 sen" />
              <Name className="sen" />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 py-2 sen" hasCopyAddressOnClick>
                <Avatar className="h-8 w-8" />
                <Name />
                <Address className="text-muted-foreground sen" />
                <EthBalance className="text-muted-foreground sen" />
              </Identity>
              <WalletDropdownBasename className="sen py-2 " />
              <WalletDropdownLink
                icon="wallet"
                href="https://keys.coinbase.com"
                className="sen py-2 "
              >
                Wallet
              </WalletDropdownLink>
              <WalletDropdownFundLink className="sen py-2 " />
              <WalletDropdownDisconnect className="sen py-2 " />
            </WalletDropdown>
          </Wallet>
        </div>
      </div>
      {children}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4">
      <Image src="/loading.gif" width={200} height={200} alt="loading" />
      <p className="text-xl">Loading</p>
    </div>
  );
}
