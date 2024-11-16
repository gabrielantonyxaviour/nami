"use client";
import { useEffect, useState } from "react";
import { useEnvironmentStore } from "../../context";
import { Button, buttonVariants } from "../../ui/button";
import { fetchKYCViewerInfo, shortenAddress } from "@/lib/utils";
import Link from "next/link";
import { KINTO_APP_ABI, KINTO_APP_ADDRESS } from "@/lib/constants";
import { encodeFunctionData } from "viem";
import { Address } from "@coinbase/onchainkit/identity";

export default function Kinto() {
  const {
    kintoSdk,
    accountInfo,
    setAccountInfo,
    setKYCViewerInfo,
    kycViewerInfo,
  } = useEnvironmentStore((store) => store);
  const [txResponse, setTxResponse] = useState("");

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

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-2">
      {accountInfo ? (
        <>
          <p>Connected to Kinto</p>

          <Address
            className={buttonVariants({
              variant: "outline",
            })}
            address="0x02feeb0AdE57b6adEEdE5A4EEea6Cf8c21BeB6B1"
          />
          <p>Testing</p>
          <Button
            onClick={async () => {
              try {
                const response = kintoSdk.sendTransaction([
                  {
                    to: KINTO_APP_ADDRESS,
                    data: encodeFunctionData({
                      abi: KINTO_APP_ABI,
                      functionName: "increment",
                      args: [],
                    }),
                    value: BigInt(0),
                  },
                ]);
                console.log("Tx response:", response);
                setTxResponse(JSON.stringify(response));
              } catch (e) {
                alert(
                  "Kinto is only available on Mainnet. Need to top up my paymaster with Mainnet ETH to send transactions :/"
                );
              }
            }}
          >
            Send Tx
          </Button>
        </>
      ) : (
        <Button
          onClick={async () => {
            console.log("Sign in with Kinto");
            try {
              await kintoSdk.createNewWallet();
            } catch (error) {
              console.error("Failed to login/signup:", error);
            }
          }}
        >
          Sign in with Kinto
        </Button>
      )}
      {txResponse && txResponse != "{}" && <p>{txResponse}</p>}
      {kycViewerInfo && (
        <p className="text-center">{JSON.stringify(kycViewerInfo)}</p>
      )}
    </div>
  );
}
