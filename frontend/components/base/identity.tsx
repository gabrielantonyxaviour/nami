import { IconEye } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Address,
  Avatar,
  Badge,
  Identity,
  IdentityCard,
  Name,
} from "@coinbase/onchainkit/identity";
import { base, mainnet } from "viem/chains";

export default function IdentityColumn() {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-center font-semibold text-xl">Identity</p>
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

          <Identity
            address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
            schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
            className="rounded-b-lg"
          >
            <Avatar />
            <Name>
              <Badge />
            </Name>
            <Address />
          </Identity>
        </CardContent>
      </Card>
      <Card className="">
        <CardTitle className="text-sm flex justify-between pl-4">
          <p className=" py-2">Identity Card</p>
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
          <IdentityCard
            address="0x4bEf0221d6F7Dd0C969fe46a4e9b339a84F52FDF"
            chain={base}
            schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
            className="rounded-t-none"
          />
        </CardContent>
      </Card>
      <Card className="">
        <CardTitle className="text-sm flex justify-between pl-4">
          <p className=" py-2 ">Resolve ENS</p>
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
          <IdentityCard
            address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
            chain={mainnet}
          />
        </CardContent>
      </Card>
      <Card className="">
        <CardTitle className="text-sm flex justify-between pl-4">
          <p className=" py-2 ">Loading Anim + Default</p>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground py-0 pr-4 rounded-l-none rounded-b-none flex space-x-1"
          >
            <IconEye size={16} />
            <p>Code</p>
          </Button>
        </CardTitle>
        <CardContent className="p-0">
          <Identity
            address="0x1234567890abcdef1234567890abcdef12345678"
            schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
            className="rounded-b-lg"
          >
            <Avatar
              address="0x1234567890abcdef1234567890abcdef12345678"
              loadingComponent={
                <div className="h-full w-full">
                  <img src="/loading.gif" alt="loading" className="w-" />
                </div>
              }
              defaultComponent={
                <div className="h-full w-full">
                  <img src="/logo.png" alt="nami" />
                </div>
              }
            />
            <Name>
              <Badge />
            </Name>
            <Address />
          </Identity>
        </CardContent>
      </Card>
    </div>
  );
}
