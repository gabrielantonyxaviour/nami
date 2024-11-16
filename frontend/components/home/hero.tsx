import { Cover } from "@/components/ui/acternity/cover";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  return (
    <div className="z-100 relative">
      <h1 className="nouns text-6xl font-medium text-center mt-24 text-[#2B2B39] tracking-[0.15em]">
        The AI Agent for Good
      </h1>
      <p className="text-center text-sm font-semibold text-[#5F5F75] nouns mt-3 tracking-widest">
        Discovers global human disasters, collects donations and keeps NGOs
        accountable
      </p>
      <div className="flex space-x-4 justify-center mt-8 nouns tracking-wider">
        <Link
          href="/donate"
          className={`${buttonVariants({
            size: "sm",
          })} px-6 text-xs font-light`}
        >
          Donate Now
        </Link>
        <Link
          href="/donate"
          className={`${buttonVariants({
            size: "sm",
            variant: "ghost",
          })} px-6 bg-[#FFC20E] hover:bg-[#FFC20E] text-indigo-800 hover:text-[#2B2B39]  text-xs`}
        >
          Request Funds
        </Link>
      </div>
    </div>
  );
}
