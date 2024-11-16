import express from "express";
import { GraphQLClient, gql } from "graphql-request";
import ngrok from "ngrok";
import { ethers } from "ethers";

const GRAPHQL_API_URL = "http://127.0.0.1:4000/graphql";
const client = new GraphQLClient(GRAPHQL_API_URL);

const GET_BALANCES = gql`
  query GetBalances($address: String!) {
    kintoBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    polBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    ethBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    scrollBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
    baseBalances(where: { account_contains: $address }) {
      amount
      token {
        id
        symbol
      }
    }
  }
`;

const app = express();
const PORT = 3002;

// Example route
app.get("/helper", async (req, res) => {
  const { address } = req.query;
  let balancesData;

  try {
    const variables = { address: address.toLocaleLowerCase() };
    balancesData = await client.request(GET_BALANCES, variables);
  } catch (error) {
    console.error("GraphQL request failed:", error);
    res.status(500).json({ error: "Failed to fetch balances." });
  }
  const priceFeedIds = [
    "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
    "0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6",
    "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
    "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
  ];

  const url = `https://hermes.pyth.network/v2/updates/price/latest?ids%5B%5D=${priceFeedIds[0]}&ids%5B%5D=${priceFeedIds[1]}&ids%5B%5D=${priceFeedIds[2]}&ids%5B%5D=${priceFeedIds[3]}`;
  const response = await fetch(url);

  console.log("Fetching latest price...");
  const data = await response.json();
  let pricesInWei = [];

  for (let i in data.parsed) {
    pricesInWei.push(
      (
        ethers.parseUnits(data.parsed[i].price.price, 18) /
        BigInt((10 ** (-1 * data.parsed[i].price.expo)).toString())
      ).toString() // Convert BigInt to string
    );
  }

  res.json({
    pricesInWei,
    data: data.binary.data, // Ensure this doesn't contain BigInt
    balances: balancesData,
  });
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  try {
    // Start ngrok tunnel
    const url = await ngrok.connect(PORT);
    console.log(`Ngrok tunnel is live at: ${url}`);
  } catch (error) {
    console.error("Error starting ngrok:", error);
  }
});
