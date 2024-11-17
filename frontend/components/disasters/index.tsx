"use client";

import Image from "next/image";
import DisasterImpactMap from "./map";
import XPosts from "./xposts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useMemo, useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { disasters, GET_DISASTERS_QUERY, graphClient } from "@/lib/constants";
import Disaster from "./disaster";
import {
  sortDisastersByCreatedAtAsc,
  sortDisastersByCreatedAtDesc,
  sortDisastersByTotalRaisedAsc,
  sortDisastersByTotalRaisedDesc,
} from "@/lib/utils";

export default function Disasters() {
  const [sort, setSort] = useState("date");
  const [order, setOrder] = useState("desc");
  const [subgraphData, setSubgraphData] = useState([]);
  const [focusedCoordinates, setFocusedCoordinates] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 35.6762, lng: 15.8917 });

  useEffect(() => {
    try {
      (async function () {
        const data = await graphClient.query({
          query: GET_DISASTERS_QUERY,
          variables: {
            orderBy: sort,
            orderDirection: order,
          },
        });
        console.log(data);
        setSubgraphData(data.data.disasters);
      })();
    } catch (e) {
      console.log(e);
    }
  }, [sort, order]);

  const currentDisasters = useMemo(() => {
    if (sort === "date" && order === "asc") {
      return sortDisastersByCreatedAtAsc(disasters);
    } else if (sort === "date" && order === "desc") {
      return sortDisastersByCreatedAtDesc(disasters);
    } else if (sort === "funds" && order === "asc") {
      return sortDisastersByTotalRaisedAsc(disasters);
    } else if (sort === "funds" && order === "desc") {
      return sortDisastersByTotalRaisedDesc(disasters);
    }
    return disasters;
  }, [disasters, sort, order]);

  useEffect(() => {
    console.log(sort, order);
  }, [sort, order]);
  return (
    <div className="w-full h-full">
      <div className="w-[1000px] mx-auto">
        <p className="nouns text-2xl mx-auto tracking-widest py-3 px-2 ">
          All Campaigns
        </p>
      </div>
      <div className="relative mx-auto w-[1000px] h-[406px]">
        <div className=" absolute w-[1005px] h-[406px] border border-[3px] border-gray-400 rounded-[3px]">
          <DisasterImpactMap
            disasters={disasters}
            focusedCoordinates={focusedCoordinates}
          />
        </div>
        <Image
          src={"/map-noun.png"}
          alt="Map"
          width={1000}
          height={1000}
          className="z-50 bottom-0 absolute pointer-events-none pb-[3px] pl-[4px]"
        />
      </div>
      <div className="bg-[#FFFCF7] mt-10 pb-8">
        <div className="w-[1000px] mx-auto flex space-x-6 py-6 ">
          <div className="flex-1">
            <div className="flex space-x-3">
              <Select value={sort} onValueChange={(s) => setSort(s)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="funds">Funds Raised</SelectItem>
                </SelectContent>
              </Select>
              <Select value={order} onValueChange={(ord) => setOrder(ord)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ScrollArea className="h-[600px] mt-4">
              <div className="flex flex-col space-y-2  pr-3">
                {currentDisasters.map((disaster, idx) => (
                  <Disaster
                    key={idx}
                    {...disaster}
                    setFocusCoordinates={() => {
                      setFocusedCoordinates(disaster.coordinates);
                    }}
                  />
                ))}
              </div>
              <ScrollBar
                orientation="vertical"
                className="border-l-[2px] w-2"
              />
            </ScrollArea>
          </div>
          <div>
            <p className="nouns tracking-widest font-semibold text-2xl pt-2 pl-2 pb-4">
              Twitter Posts
            </p>
            <ScrollArea className="h-[600px] ">
              <div className="flex flex-col space-y-3 pr-3">
                <XPosts />
              </div>
              <ScrollBar
                orientation="vertical"
                className="border-l-[2px] w-2"
              />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
