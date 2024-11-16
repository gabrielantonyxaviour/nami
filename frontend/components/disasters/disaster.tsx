"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/utils";
import { IconCalendar, IconLink } from "@tabler/icons-react";
import { Progress } from "@/components/ui/progress";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

export default function Disaster(disaster: {
  id: number;
  title: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  attestationId: string;
  createdAt: string;
  totalRaisedInUSD: number;
  requiredFundsInUSD: number;
  setFocusCoordinates: () => void;
}) {
  return (
    <Card>
      <CardContent className="p-0 w-full h-[220px] flex relative">
        <Image
          src={disaster.images[0]}
          alt={disaster.title}
          width={200}
          height={200}
          className="rounded-l-xl"
        />
        <div
          className="flex flex-col py-2 pl-4 pr-12 space-y-2 cursor-pointer"
          onClick={() => {
            disaster.setFocusCoordinates();
          }}
        >
          <div className="flex">
            <Badge className="mt-2 flex items-center rounded-sm sen px-4 hover:bg-[#F2EAE1] bg-[#F2EAE1] hover:text-[#5F5F75] text-[#5F5F75]">
              <IconCalendar className="w-3 h-3 mr-1" />
              <p className="text-xs">{formatDate(disaster.createdAt)}</p>
            </Badge>
          </div>

          <p className="nouns tracking-wider text-xl">{disaster.title}</p>
          <p className="sen tracking-wide text-xs">
            {disaster.description.split(" ").length > 20
              ? `${disaster.description
                  .split(" ")
                  .slice(0, 20)
                  .join(" ")
                  .trim()} ...`
              : disaster.description}
          </p>
          <div className="flex flex-col space-y-1">
            <p className="nouns tracking-wider text-sm text-[#7C7C7A]">{`$${disaster.totalRaisedInUSD.toLocaleString()} out of $${disaster.requiredFundsInUSD.toLocaleString()} raised`}</p>
            <Progress
              value={
                (disaster.totalRaisedInUSD * 100) / disaster.requiredFundsInUSD
              }
              className="h-2 mb-1"
            />
            <div className="grid grid-cols-5 gap-2">
              <Link
                href={`/donate/${disaster.id}`}
                className={`${buttonVariants({
                  variant: "default",
                })} col-span-3 rounded-[5px] py-1 text-xs px-0 h-6 sen`}
              >
                DONATE
              </Link>
              <Link
                href={`/donate/${disaster.id}?apply=true`}
                className={`sen ${buttonVariants({
                  variant: "outline",
                })} col-span-2 bg-[#ffc20e] hover:bg-[#ffc20e] hover:opacity-80 rounded-[5px] py-1 text-xs px-0 h-6 `}
              >
                APPLY
              </Link>
            </div>
          </div>
        </div>
        <Button
          variant={"ghost"}
          className="absolute hover:bg-transparent top-1 right-0"
          onClick={() => {
            window.open(
              "https://testnet-scan.sign.global/attestation/" +
                disaster.attestationId,
              "_blank"
            );
          }}
        >
          <IconLink className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
