import type { Metadata } from "next";
import Testing from "@/components/testing";

export const metadata: Metadata = {
  title: "Nami | Testing",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function TestingPage() {
  return <Testing />;
}
