"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Card, CardContent } from "../ui/card";
import { Disaster } from "@/lib/type";
import { idToChainInfo } from "@/lib/constants";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { baseSepolia, kinto } from "viem/chains";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownFundLink,
  WalletDropdownLink,
  WalletDropdownDisconnect,
  WalletDefault,
  ConnectWalletText,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import CoinbaseConnectWallet from "../ui/custom/connect-button/coinbase";
import { useEnvironmentStore } from "../context";
import { fetchKYCViewerInfo, shortenAddress } from "@/lib/utils";

export default function DonateHero({ disaster }: { disaster: Disaster }) {
  const [selectedChainId, setSelectedChainId] = useState<number>(0);
  const [apply, setApply] = useState(false);
  const params = useSearchParams();

  const {
    kintoSdk,
    accountInfo,
    setAccountInfo,
    setKYCViewerInfo,
    kycViewerInfo,
  } = useEnvironmentStore((store) => store);

  useEffect(() => {
    if (accountInfo && accountInfo.walletAddress) {
      fetchKYCViewerInfo({ accountInfo }).then((info) => {
        if (info) setKYCViewerInfo(info);
      });
    }
  }, [accountInfo]);

  useEffect(() => {
    try {
      kintoSdk.connect().then((info: any) => {
        if (info) setAccountInfo(info);
      });
    } catch (error) {
      console.log("Failed to fetch account info:", error);
    }
  });
  useEffect(() => {
    const applyParam = params.get("apply")
      ? JSON.parse(params.get("apply") as string)
      : false;
    setApply(applyParam);
  }, [params]);
  return (
    <>
      <p className="nouns tracking-widest text-2xl">{disaster.title}</p>
      <div className="flex py-4  justify-between">
        <div className="w-[500px] h-[300px] overflow-hidden rounded-xl">
          <Image
            src={disaster.images[0]}
            alt="Zoomed Image"
            width={800}
            height={400}
            className="w-[800px] h-[400px] object-cover "
          />
        </div>
        <Card className="w-[47%] bg-[#F2F2F2]">
          <CardContent className="relative pt-8 pb-4 px-8 flex flex-col justify-between h-full">
            <div>
              <p className="nouns tracking-wider text-sm text-[#7C7C7A] pt-4 pb-2">{`$${disaster.totalRaisedInUSD.toLocaleString()} out of $${disaster.requiredFundsInUSD.toLocaleString()} raised`}</p>
              <Progress
                value={
                  (disaster.totalRaisedInUSD * 100) /
                  disaster.requiredFundsInUSD
                }
                className="h-2"
              />
            </div>

            <div className="flex space-x-3 justify-center">
              {Object.values(idToChainInfo)
                .sort((a, b) => a.id - b.id)
                .map((chainInfo) =>
                  apply ? (
                    <Image
                      key={chainInfo.id}
                      src={chainInfo.image}
                      width={32}
                      height={32}
                      className={
                        "select-none rounded-full pointer-events-none transition duration-200 ease-in-out opacity-40"
                      }
                      alt={chainInfo.name}
                    />
                  ) : (
                    <Image
                      key={chainInfo.id}
                      src={chainInfo.image}
                      width={32}
                      height={32}
                      className={
                        selectedChainId === chainInfo.chainId
                          ? "opacity-100 select-none rounded-full  transition duration-200 ease-in-out"
                          : "opacity-40 hover:opacity-80 hover:scale-110 cursor-pointer select-none rounded-full  transition duration-200 ease-in-out"
                      }
                      alt={chainInfo.name}
                      onClick={() => {
                        setSelectedChainId(chainInfo.chainId);
                      }}
                    />
                  )
                )}
            </div>
            <div>
              {apply ? (
                <Button
                  className="w-full flex justify-center items-center space-x-2 bg-[#6059C9] "
                  onClick={async () => {
                    if (accountInfo) return;
                    console.log("Sign in with Kinto");
                    try {
                      await kintoSdk.createNewWallet();
                    } catch (error) {
                      console.error("Failed to login/signup:", error);
                    }
                  }}
                >
                  <Image
                    src={"/chains/kinto-no-bg.png"}
                    width={32}
                    height={32}
                    alt="Kinto"
                  />
                  <p className="nouns tracking-widest">
                    {accountInfo
                      ? shortenAddress(accountInfo.walletAddress || "")
                      : "NGO LOGIN"}
                  </p>
                </Button>
              ) : selectedChainId == 0 ? (
                <Button
                  className="w-full flex justify-center items-center space-x-2 bg-[#6059C9] "
                  disabled
                >
                  <p className="sen ">Connect Wallet</p>
                </Button>
              ) : selectedChainId == baseSepolia.id ? (
                <CoinbaseConnectWallet text="Connect with Coinbase" />
              ) : selectedChainId == kinto.id ? (
                <Button
                  className="w-full flex justify-center items-center space-x-1 bg-[#6059C9] "
                  onClick={async () => {
                    if (accountInfo) return;
                    console.log("Sign in with Kinto");
                    try {
                      await kintoSdk.createNewWallet();
                    } catch (error) {
                      console.error("Failed to login/signup:", error);
                    }
                  }}
                >
                  <Image
                    src={"/chains/kinto-no-bg.png"}
                    width={32}
                    height={32}
                    alt="Kinto"
                  />
                  <p className="sen ">
                    {accountInfo
                      ? shortenAddress(accountInfo.walletAddress || "")
                      : "Sign in with Kinto"}
                  </p>
                </Button>
              ) : (
                <Button
                  className="w-full flex justify-center items-center space-x-2 bg-[#6059C9] "
                  onClick={() => {}}
                >
                  <p className="sen ">Connect Wallet</p>
                </Button>
              )}
              <p className="text-[10px] sen text-center text-[#7c7c7a] pt-4">
                {disaster.vaultAddress}
              </p>
              <p className="text-[10px] sen text-center text-[#7c7c7a]">
                {disaster.subName}
              </p>
            </div>

            <Image
              src={"/airdrop.png"}
              width={100}
              height={100}
              alt="Airdrop"
              className="absolute -top-16 -right-12"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
