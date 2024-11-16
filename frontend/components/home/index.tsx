import Image from "next/image";
import Hero from "./hero";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-screen">
      <img src={"/hero.png"} alt="hero" className="w-screen absolute" />
      <Hero />
    </div>
  );
}
