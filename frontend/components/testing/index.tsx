import Image from "next/image";
import Title from "./title";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function Testing() {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-2">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="rounded-full opacity-90"
      />
      <Title />
      <div className="flex space-x-4 py-4">
        <Link
          href={"/donate"}
          className={buttonVariants({
            variant: "default",
          })}
        >
          Donate Now
        </Link>
        <Link
          href={"/kinto"}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Request Funds
        </Link>
      </div>
      <Link
        href={"/base"}
        className={
          buttonVariants({
            variant: "ghost",
          }) + "flex items-center space-x-2"
        }
      >
        <Image
          src="/coinbase.png"
          alt="coinbase"
          width={30}
          height={30}
          className="rounded-full opacity-90"
        />
        <p>Onchainkit Playground</p>
      </Link>
    </div>
  );
}
