"use client";

import {
  disasters,
  GET_DISASTERS_BY_ADDRESS_QUERY,
  GET_DISASTERS_QUERY,
  graphClient,
} from "@/lib/constants";
import Image from "next/image";

import { useEffect, useState } from "react";

import DonateHero from "./hero";
import DonateBody from "./body";
import DonationTable from "./donations-table";

import SwapModal from "./swap-modal";
import { gql } from "@apollo/client";

export default function Donate({ id }: { id: string }) {
  const disaster = disasters.find((disaster) => disaster.id === parseInt(id));
  const [showSwapModalPopover, setShowSwapModalPopover] = useState(false);
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const data = await graphClient.query({
          query: GET_DISASTERS_BY_ADDRESS_QUERY,
          variables: {
            vault: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a", // TODO: Change this to disasterId
            to: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
            tokenSymbol: null,
            chain: null,
          },
        });
        console.log(data);
        setDonationData(data.data.disasters);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);

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
