import type { Metadata } from "next";
import Disasters from "@/components/disasters";

export const metadata: Metadata = {
  title: "Nami | Disasters",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function DisastersPage() {
  return <Disasters />;
}
