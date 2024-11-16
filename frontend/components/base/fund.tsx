import { FundButton, getOnrampBuyUrl } from "@coinbase/onchainkit/fund";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { IconEye } from "@tabler/icons-react";
import { Button, buttonVariants } from "../ui/button";
import { useAccount } from "wagmi";

export default function FundColumn() {
  const { address } = useAccount();
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">Fund</p>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 space-x-6">
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
        <CardContent className="p-0  ">
          <Separator />
          <div className="flex justify-center">
            <FundButton
              className={`${buttonVariants({ variant: "default" })} my-2`}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 space-x-6">
          <p className=" py-2">Onramp Buy Url</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0  ">
          <Separator />
          <div className="flex justify-center">
            <FundButton
              className={`${buttonVariants({ variant: "default" })} my-2`}
              fundingUrl={getOnrampBuyUrl({
                projectId: process.env.NEXT_PUBLIC_CDP_PROJECT_ID || "",
                addresses: { [address as string]: ["base"] },
                assets: ["USDC"],
                presetFiatAmount: 20,
                fiatCurrency: "USD",
              })}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 space-x-6">
          <p className=" py-2">Icon</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0  ">
          <Separator />
          <div className="flex justify-center">
            <FundButton
              className={`${buttonVariants({ variant: "default" })} my-2`}
              hideText={true}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-sm flex justify-between pl-4 space-x-6">
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
        <CardContent className="p-0  ">
          <Separator />
          <div className="flex justify-center">
            <FundButton
              className={`${buttonVariants({
                variant: "outline",
              })} my-2 dark:text-white text-black`}
              text="Get Assets"
              hideIcon={true}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
