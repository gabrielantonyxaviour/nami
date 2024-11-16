import { IconEye } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
} from "@coinbase/onchainkit/swap";
import { base, mainnet } from "viem/chains";
import { Token } from "@/lib/type";
import { degenToken, ethToken, usdcToken, wethToken } from "@/lib/constants";

export default function SwapColumn() {
  const ETHToken: Token = {
    address: "" as any,
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image:
      "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
  };

  const USDCToken: Token = {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC",
    symbol: "USDC",
    image:
      "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
  };

  // add other tokens here to display them as options in the swap
  const swappableTokens: Token[] = [ETHToken, USDCToken];

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">Swap</p>
      <Card className="">
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
        <CardContent className="p-0 w-[400px]">
          <Separator />
          <Swap className="w-[400px]">
            <SwapAmountInput
              label="Sell"
              swappableTokens={swappableTokens}
              token={ETHToken}
              type="from"
            />
            <SwapToggleButton />
            <SwapAmountInput
              label="Buy"
              swappableTokens={swappableTokens}
              token={USDCToken}
              type="to"
            />
            <SwapButton className="bg-primary" />
            <SwapMessage />
            <SwapToast />
          </Swap>
        </CardContent>
      </Card>
    </div>
  );
}
