"use client";

import { disasters } from "@/lib/constants";
import Image from "next/image";

import { useState } from "react";

import DonateHero from "./hero";
import DonateBody from "./body";
import DonationTable from "./donations-table";

import SwapModal from "./swap-modal";

export default function Donate({ id }: { id: string }) {
  const disaster = disasters.find((disaster) => disaster.id === parseInt(id));
  const [showSwapModalPopover, setShowSwapModalPopover] = useState(false);

  return disaster ? (
    <div className="w-[1000px] h-full mx-auto pt-6">
      <DonateHero disaster={disaster} />
      <div className="flex flex-col pt-6">
        <DonateBody disaster={disaster} />
        <DonationTable />
      </div>

      <div className="fixed bottom-6 left-6 w-[40px] h-[40px] rounded-full overflow-hidden shadow-lg cursor-pointer hover:scale-110 transition duration-200">
        <Image
          src="/coinbase.png" // Replace with your image path
          alt="Floating Image"
          width={40} // Adjust as needed
          height={40} // Adjust as needed
          onClick={() => {
            setShowSwapModalPopover(true);
          }}
        />
      </div>
      <SwapModal
        open={showSwapModalPopover}
        setOpen={setShowSwapModalPopover}
      />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4">
      <Image src="/loading.gif" width={200} height={200} alt="loading" />
      <p className="text-xl">Loading</p>
    </div>
  );
}
