import express from "express";
import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); // Parse JSON bodies

const privateKey = process.env.PRIVATE_KEY;

if (!privateKey) {
  throw new Error("Private key not found in environment variables");
}

// Initialize the client
const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.baseSepolia,
  account: privateKeyToAccount(privateKey),
});

// Endpoint to create an attestation
app.post("/create-attestation", async (req, res) => {
  const { organizationName, fundDonated, cause, walletAddress } = req.body;

  // Validate the input
  if (!organizationName || !fundDonated || !cause || !walletAddress) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create attestation using the new schema
    const createAttestationRes = await client.createAttestation({
      schemaId: "0x3d2", // Updated schema ID
      data: {
        "Organization Name": organizationName,
        "Fund Donated": fundDonated,
        "Cause": cause,
        "Wallet Address": walletAddress,
      },
      indexingValue: `${organizationName.toLowerCase()}-${cause.toLowerCase()}-${walletAddress.toLowerCase()}`,
    });

    res.status(200).json({ message: "Attestation created", data: createAttestationRes });
  } catch (error) {
    console.error("Error creating attestation:", error);
    res.status(500).json({ error: "Failed to create attestation" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
