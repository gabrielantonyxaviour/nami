"use client";

import { FundButton, getOnrampBuyUrl } from "@coinbase/onchainkit/fund";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { IconEye } from "@tabler/icons-react";
import { Button, buttonVariants } from "../ui/button";
import { useAccount } from "wagmi";
import IdentityColumn from "./identity";
import FundColumn from "./fund";
import NftColumn from "./nft";
import SwapColumn from "./swap";
import TransactionColumn from "./transaction";
import WalletColumn from "./wallet";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import MintColumn from "./mint";
import { Avatar, Name } from "@coinbase/onchainkit/identity";
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import ToggleTheme from "../ui/custom/toggle-theme";
export default function OnchainkitPlayground() {
  const { address } = useAccount();
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center space-x-4 px-8 pt-4">
        <p className="text-center font-semibold">
          ShadCN + Onchainkit Playground
        </p>
        <ToggleTheme />
      </div>

      <Separator className="my-4" />
      {address ? (
        <ScrollArea className="w-screen whitespace-nowrap">
          <div className="flex space-x-4 w-max justify-between px-6">
            <FundColumn />
            <IdentityColumn />
            <NftColumn />
            <MintColumn />
            <SwapColumn />
            <TransactionColumn />
            <WalletColumn />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full pb-24">
          <Wallet>
            <ConnectWallet className="bg-primary">
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
          </Wallet>
        </div>
      )}
    </div>
  );
}
