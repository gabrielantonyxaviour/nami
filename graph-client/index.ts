import { getBuiltGraphSDK } from "./.graphclient";

const { GetBalances } = getBuiltGraphSDK();

async function main() {
  const {
    ethBalances,
    kintoBalances,
    polBalances,
    scrollBalances,
    baseBalances,
  } = await GetBalances({
    address: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a".toLocaleLowerCase(),
  });
  console.log({
    ethBalances,
    kintoBalances,
    polBalances,
    scrollBalances,
    baseBalances,
  });
}

main().catch(console.error);
