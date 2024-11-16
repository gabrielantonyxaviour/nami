import { IconEye } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { NFTCard } from "@coinbase/onchainkit/nft";
import {
  NFTLastSoldPrice,
  NFTMedia,
  NFTNetwork,
  NFTOwner,
  NFTTitle,
} from "@coinbase/onchainkit/nft/view";
import { base, mainnet } from "viem/chains";

export default function NftColumn() {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">NFT</p>
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
        <CardContent className="p-0 ">
          <Separator />

          <NFTCard
            contractAddress="0xb4703a3a73aec16e764cbd210b0fde9efdab8941"
            tokenId="1"
            className="w-[300px] rounded-t-none"
          >
            <NFTMedia />
            <NFTTitle />
            <NFTOwner />
            <NFTLastSoldPrice />
            <NFTNetwork />
          </NFTCard>
        </CardContent>
      </Card>
      {/* <Card>
        <CardTitle className="text-sm flex justify-between pl-4">
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

          <NFTCard
            contractAddress="0x877f0f3fef81c28a8c40fe060b17d254003377ad"
            tokenId="1"
            className="w-[300px] rounded-t-none bg-muted-foreground"
          >
            <NFTTitle className="text-secondary" />
            <NFTOwner label="" className="text-white" />

            <NFTMedia square={false} />
            <div className="flex justify-between">
              <NFTNetwork label="" className="text-secondary block" />
              <NFTLastSoldPrice label="" className="text-secondary block" />
            </div>
          </NFTCard>
        </CardContent>
      </Card> */}
    </div>
  );
}
