import type { Metadata } from "next";
import OnchainkitPlayground from "@/components/base";

export const metadata: Metadata = {
  title: "Nami | Onchainkit Playground",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function HomePage() {
  return <OnchainkitPlayground />;
}
