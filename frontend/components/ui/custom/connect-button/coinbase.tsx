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
import Image from "next/image";

export default function CoinbaseConnectWallet({ text }: { text: string }) {
  return (
    <Wallet className="text-sm sen w-full">
      <ConnectWallet className="sen py-2 w-full">
        <ConnectWalletText className="flex items-center space-x-2">
          <Image
            src={"/coinbase.png"}
            width={30}
            height={30}
            alt=""
            className="rounded-full"
          />
          <p>{text}</p>
        </ConnectWalletText>
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
  );
}
