import { IconEye } from "@tabler/icons-react";
import { Button, buttonVariants } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { NFTMintCard } from "@coinbase/onchainkit/nft";
import { NFTMedia, NFTNetwork } from "@coinbase/onchainkit/nft/view";
import {
  NFTCreator,
  NFTCollectionTitle,
  NFTQuantitySelector,
  NFTAssetCost,
  NFTMintButton,
} from "@coinbase/onchainkit/nft/mint";
import { base, mainnet } from "viem/chains";

export default function MintColumn() {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">Mint</p>
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
          <NFTMintCard
            contractAddress="0xed2f34043387783b2727ff2799a46ce3ae1a34d2"
            className="w-[300px] rounded-t-none"
            tokenId="2"
          >
            <NFTCreator />
            <NFTMedia />
            <NFTCollectionTitle />
            <NFTQuantitySelector />
            <NFTAssetCost />
            <NFTNetwork />
            <NFTMintButton />
          </NFTMintCard>
        </CardContent>
      </Card>
    </div>
  );
}
