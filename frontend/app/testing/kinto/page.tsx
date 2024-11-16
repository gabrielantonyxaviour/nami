import type { Metadata } from "next";
import Kinto from "@/components/testing/kinto";

export const metadata: Metadata = {
  title: "Nami | Kinto Page",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function HomePage() {
  return <Kinto />;
}
