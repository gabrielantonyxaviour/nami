import { Disaster } from "@/lib/type";
import { Badge } from "../ui/badge";
import { IconCalendar } from "@tabler/icons-react";
import { formatDate } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function DonateBody({ disaster }: { disaster: Disaster }) {
  return (
    <>
      <div className="flex">
        <Badge className="mt-2 flex items-center rounded-sm sen px-4 hover:bg-[#F2EAE1] bg-[#F2EAE1] hover:text-[#5F5F75] text-[#5F5F75]">
          <IconCalendar className="w-3 h-3 mr-1" />
          <p className="text-xs">{formatDate(disaster.createdAt)}</p>
        </Badge>
      </div>
      <p className="nouns tracking-widest text-2xl py-4">{disaster.title}</p>
      <p className="sen  text-xs text-[#5F5F75]">{disaster.description}</p>
      <p className="nouns tracking-widest text-lg py-4">Sources</p>
      <div className="flex space-x-4">
        <Card className=" rounded-[8px] ">
          <CardContent className="flex flex-col justify-center items-center py-3 px-5 ">
            <Image
              src={"/news/guardian.png"}
              width={80}
              height={80}
              alt="guardian"
            />
          </CardContent>
        </Card>
        <Card className=" rounded-[8px] ">
          <CardContent className="flex flex-col justify-center items-center py-3 px-5 ">
            <Image
              src={"/news/thai-red-cross.png"}
              width={80}
              height={80}
              alt="thai-red-cross"
            />
          </CardContent>
        </Card>
        <Card className=" rounded-[8px] ">
          <CardContent className="flex flex-col justify-center items-center py-3 px-5 ">
            <Image
              src={"/news/thai-world.png"}
              width={80}
              height={80}
              alt="thai-world"
            />
          </CardContent>
        </Card>
      </div>
      <p className="nouns tracking-widest text-lg py-4">Donations</p>
    </>
  );
}
