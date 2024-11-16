import { IconEye } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Transaction,
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import { base, baseSepolia, mainnet } from "viem/chains";
import { useCallback } from "react";
import { contracts } from "@/lib/constants";

export default function TransactionColumn() {
  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">Transaction</p>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4">
          <p className=" py-2">Component</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0 min-w-[300px]">
          <Separator />
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
            <TransactionButton text="Send Transaction" className="bg-primary" />
            <TransactionSponsor />
            <TransactionStatus>
              <TransactionStatusLabel />
              <TransactionStatusAction />
            </TransactionStatus>
          </Transaction>
        </CardContent>
      </Card>
    </div>
  );
}
