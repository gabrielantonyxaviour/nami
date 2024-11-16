import { getBuiltGraphSDK } from "./.graphclient";

const { GetDisasters } = getBuiltGraphSDK();

async function main() {
  const { disasters } = await GetDisasters();
  console.log(disasters);
}

main().catch(console.error);
