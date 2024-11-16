import type { Metadata } from "next";
import Donate from "@/components/testing/donate";

export const metadata: Metadata = {
  title: "Nami | Donate Page",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function HomePage() {
  return <Donate />;
}
