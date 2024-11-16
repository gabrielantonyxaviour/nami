import { getBuiltGraphSDK } from "./.graphclient";

const { GetBalances } = getBuiltGraphSDK();

async function main() {
  const {
    ethBalances,
    kintoBalances,
    polBalances,
    scrollBalances,
    baseBalances,
  } = await GetBalances();
  console.log({
    ethBalances,
    kintoBalances,
    polBalances,
    scrollBalances,
    baseBalances,
  });
}

main().catch(console.error);
