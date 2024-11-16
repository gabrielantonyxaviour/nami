import type { Metadata } from "next";
import Home from "@/components/home";

export const metadata: Metadata = {
  title: "Nami | Home",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function HomePage() {
  return <Home />;
}
