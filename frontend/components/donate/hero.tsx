"use client";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { Progress } from "../ui/progress";
import { Card, CardContent } from "../ui/card";
import { Disaster } from "@/lib/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  idToChain,
  idToChainInfo,
  idToTokenInfo,
  KINTO_CORE_ABI,
  KINTO_CORE_ADDRESS,
  publicClients,
} from "@/lib/constants";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  baseSepolia,
  kinto,
  polygonAmoy,
  scrollSepolia,
  sepolia,
} from "viem/chains";
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
import {
  createPublicClient,
  createWalletClient,
  custom,
  encodeFunctionData,
  erc20Abi,
  http,
  parseUnits,
  zeroAddress,
} from "viem";
import { Input } from "../ui/input";
import { useAccount } from "wagmi";
import { FundButton } from "@coinbase/onchainkit/fund";
import { DropdownMenu } from "../ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";

export default function DonateHero({ disaster }: { disaster: Disaster }) {
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { address, chainId } = useAccount();
  const [selectedChainId, setSelectedChainId] = useState<number>(0);
  const [apply, setApply] = useState(false);
  const [openKintoPayModal, setOpenKintoPayModal] = useState(false);
  const [openBasePayModal, setOpenBasePayModal] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [openEvmPayModal, setOpenEvmPayModal] = useState(false);
  const params = useSearchParams();
  const [applyFundsAmount, setApplyFundsAmount] = useState("0");
  const [donateFundsAmount, setDonateFundsAmount] = useState("0");
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<string>("");
  const {
    kintoSdk,
    accountInfo,
    setAccountInfo,
    setKYCViewerInfo,
    setOverallDonations,
    overallDonations,
    kycViewerInfo,
  } = useEnvironmentStore((store) => store);
  const vaultAddress = "0xace8655DE7f2a1865DDd686CFcdD47447B86965C";

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
        console.log("On connect info");
        if (info) setAccountInfo(info);
        console.log("KINTO INFO");
        console.log(info);
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
              <p className="nouns tracking-wider text-sm text-[#7C7C7A] pt-4 pb-2">{`$${
                apply == true
                  ? disaster.totalRaisedInUSD.toLocaleString()
                  : overallDonations.toString()
              } out of $${disaster.requiredFundsInUSD.toLocaleString()} raised`}</p>
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
                    if (accountInfo) setOpenKintoPayModal(true);
                    else {
                      try {
                        await kintoSdk.createNewWallet();
                      } catch (error) {
                        console.error("Failed to login/signup:", error);
                      }
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
                    {accountInfo ? "Apply for Funding" : "NGO LOGIN"}
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
                address != undefined ? (
                  <div className="flex space-x-3 items-center ">
                    <Button
                      className="flex-1"
                      onClick={() => {
                        setOpenBasePayModal(true);
                      }}
                    >
                      Pay with Crypto
                    </Button>
                    <FundButton
                      className={`${buttonVariants({
                        variant: "outline",
                      })} my-2 dark:text-white text-black flex-1`}
                      text="Pay with Credit Card"
                      hideIcon={true}
                    />
                  </div>
                ) : (
                  <CoinbaseConnectWallet text="Connect with Coinbase" />
                )
              ) : selectedChainId == kinto.id ? (
                <Button
                  className="w-full flex justify-center items-center space-x-1 bg-[#6059C9] "
                  onClick={async () => {
                    if (accountInfo) return;
                    console.log("Sign in with Kinto");
                    try {
                      // await kintoSdk.createNewWallet();
                      kintoSdk.connect().then((info: any) => {
                        console.log("On connect info");
                        if (info) setAccountInfo(info);
                        console.log("KINTO INFO");
                        console.log(info);
                      });
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
                  onClick={() => {
                    if (address) {
                      if (selectedChainId != chainId && openChainModal)
                        openChainModal();
                      else setOpenEvmPayModal(true);
                    }
                    if (openConnectModal) openConnectModal();
                  }}
                >
                  <p className="sen ">
                    {address != undefined ? "Donate Now" : "Connect Wallet"}
                  </p>
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

        {openKintoPayModal && (
          <Dialog open={openKintoPayModal} onOpenChange={setOpenKintoPayModal}>
            <DialogContent className=" w-[400px] px-4 py-8">
              {verifying ? (
                <>
                  <div className="flex justify-center">
                    <Image
                      src={"/loading.gif"}
                      width={200}
                      height={200}
                      alt="loading"
                      onClick={() => {
                        // setTimeout();
                      }}
                    />
                  </div>

                  <p className="sen pt-6 pb-4 text-center">
                    An AI agent is verifying your request. <br /> Please hold on
                  </p>
                </>
              ) : (
                <>
                  <p>Choose Amount</p>
                  <div className="flex space-x-4 items-center">
                    <Input
                      type="number"
                      value={applyFundsAmount}
                      onChange={(e) => {
                        setApplyFundsAmount(e.target.value);
                      }}
                    ></Input>
                    <p className="sen">USD</p>
                  </div>
                  <Button
                    className="bg-primary"
                    onClick={async () => {
                      // const data = encodeFunctionData(
                      //   [
                      //     {
                      //       inputs: [
                      //         {
                      //           internalType: "uint256",
                      //           name: "_disasterId",
                      //           type: "uint256",
                      //         },
                      //         {
                      //           internalType: "uint256",
                      //           name: "_amount",
                      //           type: "uint256",
                      //         },
                      //       ],
                      //       name: "requestFunding",
                      //       outputs: [],
                      //       stateMutability: "nonpayable",
                      //       type: "function",
                      //     },
                      //   ],
                      //   "requestFunding",
                      //   [disaster.id, applyFundsAmount]
                      // );
                      // await kintoSdk.sendTransaction({
                      //   to: KINTO_CORE_ADDRESS,
                      //   data: data,
                      //   chainId: selectedChainId,
                      // });

                      setVerifying(true);
                    }}
                  >
                    Apply For Funds
                  </Button>
                </>
              )}
            </DialogContent>
          </Dialog>
        )}
        {openBasePayModal && (
          <Dialog open={openBasePayModal} onOpenChange={setOpenBasePayModal}>
            <DialogContent className=" w-[500px] px-4 py-8">
              <p>Choose Token</p>
              <div className="flex space-x-3 justify-center">
                {idToTokenInfo[baseSepolia.id]
                  .sort((a: any, b: any) => a.id - b.id)
                  .map((tokenInfo: any) => (
                    <Image
                      key={tokenInfo.id}
                      src={tokenInfo.image}
                      width={32}
                      height={32}
                      className={
                        selectedTokenAddress === tokenInfo.address
                          ? "opacity-100 select-none rounded-full  transition duration-200 ease-in-out"
                          : "opacity-40 hover:opacity-80 hover:scale-110 cursor-pointer select-none rounded-full  transition duration-200 ease-in-out"
                      }
                      alt={tokenInfo.name}
                      onClick={() => {
                        setSelectedTokenAddress(tokenInfo.address);
                      }}
                    />
                  ))}
              </div>

              <p>Choose Amount</p>
              <div className="flex space-x-2 items-center">
                <Input
                  type="number"
                  value={donateFundsAmount}
                  onChange={(e) => {
                    setDonateFundsAmount(e.target.value);
                  }}
                ></Input>
                {idToTokenInfo[baseSepolia.id].filter(
                  (token: any) => token.address == selectedTokenAddress
                ).length > 0 && (
                  <p className="sen ">
                    {
                      idToTokenInfo[baseSepolia.id].filter(
                        (token: any) => token.address == selectedTokenAddress
                      )[0].name
                    }
                  </p>
                )}
              </div>
              <Button
                className="bg-primary"
                onClick={async () => {
                  const publicClient =
                    publicClients[selectedChainId] ||
                    createPublicClient({
                      chain: baseSepolia,
                      transport: http(),
                    });

                  const walletClient = createWalletClient({
                    chain:
                      selectedChainId == baseSepolia.id
                        ? baseSepolia
                        : selectedChainId == sepolia.id
                        ? sepolia
                        : selectedChainId == scrollSepolia.id
                        ? scrollSepolia
                        : polygonAmoy,
                    transport: custom(window.ethereum),
                  });
                  try {
                    console.log(selectedTokenAddress);
                    console.log(parseUnits(donateFundsAmount, 18));
                    console.log(address);
                    console.log(vaultAddress);
                    if (selectedTokenAddress == zeroAddress) {
                      await walletClient.sendTransaction({
                        account: address as `0x${string}`,
                        to: vaultAddress,
                        value: parseUnits(donateFundsAmount, 18),
                      });
                      setOverallDonations(parseInt(donateFundsAmount));
                      toast({
                        title: "Donation Successful",
                        description: "Thank you for your donation",
                      });
                      setOpenEvmPayModal(false);
                    } else {
                      const { request } = await publicClient.simulateContract({
                        account: address as `0x${string}`,
                        address: selectedTokenAddress,
                        abi: erc20Abi,
                        functionName: "transfer",
                        args: [vaultAddress, parseUnits(donateFundsAmount, 18)],
                      });
                      await walletClient.writeContract(request);
                      setOverallDonations(parseInt(donateFundsAmount));
                      toast({
                        title: "Donation Successful",
                        description: "Thank you for your donation",
                      });
                      setOpenEvmPayModal(false);
                    }
                  } catch (e) {
                    console.log(e);
                    toast({
                      title: "Insufficient Funds",
                      description: "Please check your balance",
                    });
                  }
                }}
              >
                Donate now
              </Button>
            </DialogContent>
          </Dialog>
        )}
        {openEvmPayModal && (
          <Dialog open={openEvmPayModal} onOpenChange={setOpenEvmPayModal}>
            <DialogContent className=" w-[500px] px-4 py-8">
              <p>Choose Token</p>
              <div className="flex space-x-3 justify-center">
                {idToTokenInfo[selectedChainId]
                  .sort((a: any, b: any) => a.id - b.id)
                  .map((tokenInfo: any) => (
                    <Image
                      key={tokenInfo.id}
                      src={tokenInfo.image}
                      width={32}
                      height={32}
                      className={
                        selectedTokenAddress === tokenInfo.address
                          ? "opacity-100 select-none rounded-full  transition duration-200 ease-in-out"
                          : "opacity-40 hover:opacity-80 hover:scale-110 cursor-pointer select-none rounded-full  transition duration-200 ease-in-out"
                      }
                      alt={tokenInfo.name}
                      onClick={() => {
                        setSelectedTokenAddress(tokenInfo.address);
                      }}
                    />
                  ))}
              </div>

              <p>Choose Amount</p>
              <div className="flex space-x-2 items-center">
                <Input
                  type="number"
                  value={donateFundsAmount}
                  onChange={(e) => {
                    setDonateFundsAmount(e.target.value);
                  }}
                ></Input>
                {idToTokenInfo[baseSepolia.id].filter(
                  (token: any) => token.address == selectedTokenAddress
                ).length > 0 && (
                  <p className="sen ">
                    {
                      idToTokenInfo[baseSepolia.id].filter(
                        (token: any) => token.address == selectedTokenAddress
                      )[0].name
                    }
                  </p>
                )}
              </div>
              <Button
                className="bg-primary"
                onClick={async () => {
                  const publicClient =
                    publicClients[selectedChainId] ||
                    createPublicClient({
                      chain: baseSepolia,
                      transport: http(),
                    });

                  const walletClient = createWalletClient({
                    chain:
                      selectedChainId == baseSepolia.id
                        ? baseSepolia
                        : selectedChainId == sepolia.id
                        ? sepolia
                        : selectedChainId == scrollSepolia.id
                        ? scrollSepolia
                        : polygonAmoy,
                    transport: custom(window.ethereum),
                  });
                  try {
                    console.log(selectedTokenAddress);
                    console.log(parseUnits(donateFundsAmount, 18));
                    console.log(address);
                    console.log(vaultAddress);
                    if (selectedTokenAddress == zeroAddress) {
                      await walletClient.sendTransaction({
                        account: address as `0x${string}`,
                        to: vaultAddress,
                        value: parseUnits(donateFundsAmount, 18),
                        chain: idToChain[selectedChainId],
                      });
                      setOverallDonations(parseInt(donateFundsAmount));
                      toast({
                        title: "Donation Successful",
                        description: "Thank you for your donation",
                      });
                      setOpenEvmPayModal(false);
                    } else {
                      const { request } = await publicClient.simulateContract({
                        account: address as `0x${string}`,
                        address: selectedTokenAddress,
                        abi: erc20Abi,
                        functionName: "transfer",
                        chain: idToChain[selectedChainId],
                        args: [vaultAddress, parseUnits(donateFundsAmount, 18)],
                      });
                      await walletClient.writeContract(request);
                      setOverallDonations(parseInt(donateFundsAmount));
                      toast({
                        title: "Donation Successful!",
                        description: "Thank you for your donation",
                      });
                      setOpenEvmPayModal(false);
                    }
                  } catch (e) {
                    console.log(e);
                    toast({
                      title: "Insufficient Funds",
                      description: "Please check your balance",
                    });
                  }
                }}
              >
                Donate now
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </>
  );
}
