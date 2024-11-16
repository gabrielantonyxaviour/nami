import type { Metadata } from "next";
import Donate from "@/components/donate";

export const metadata: Metadata = {
  title: "Nami | Donate",
  description:
    "An autonomous agent that discovers global human disasters, collect donations and keeps NGO’s accountable",
};

export default function DonatePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <Donate id={params.id} />;
}
