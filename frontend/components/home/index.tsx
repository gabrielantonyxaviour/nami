"use client";
import Image from "next/image";
import Hero from "./hero";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { FrameMetadata } from "@coinbase/onchainkit/frame";

export default function Home() {
  return (
    <div className="relative w-screen">
      <FrameMetadata
        buttons={[
          {
            label: "Tell me the story",
          },
          {
            action: "link",
            label: "Link to Google",
            target: "https://www.google.com",
          },
          {
            action: "post_redirect",
            label: "Redirect to cute pictures",
          },
        ]}
        image={{
          src: "https://nami-ai.vercel.app/logo.jpg",
          aspectRatio: "1:1",
        }}
        input={{
          text: "Tell me a boat story",
        }}
        state={{
          counter: 1,
        }}
        postUrl="https://nami-ai.vercel.app"
      />
      <img src={"/hero.png"} alt="hero" className="w-screen absolute" />
      <Hero />
    </div>
  );
}
