import { createBrianCDPAgent } from "@brian-ai/langchain";
import { ChatOpenAI } from "@langchain/openai";

async function main() {
  const agent = await createBrianCDPAgent({
    apiKey: process.env.BRIAN_API_KEY || "",
    coinbaseApiKey: process.env.COINBASE_API_KEY || "",
    coinbaseApiKeySecret: process.env.COINBASE_API_SECRET || "",
    walletData: {
      walletId: process.env.WALLET_ID || "",
      seed: process.env.SEED || "",
    },
    llm: new ChatOpenAI({ apiKey: process.env.OPENAI_API_KEY }),
    tools: [],
  });
}
main();
