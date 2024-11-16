import { IconEye } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
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
import { base, mainnet } from "viem/chains";

export default function WalletColumn() {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">Wallet</p>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 min-w-[300px]">
          <p className=" py-2">Default</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0 ">
          <Separator />
          <div className="p-4 w-full flex justify-center">
            <WalletDefault />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 min-w-[300px]">
          <p className=" py-2">Custom</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0 ">
          <Separator />
          <div className="p-4 w-full flex justify-center">
            <Wallet>
              <ConnectWallet className="">
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address className="text-muted-foreground" />
                </Identity>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 min-w-[300px]">
          <p className=" py-2">Features</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0 ">
          <Separator />
          <div className="p-4 w-full flex justify-center">
            <Wallet>
              <ConnectWallet className="">
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
