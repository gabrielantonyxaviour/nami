const express = require("express");
const app = express();
const port = 3000;

// Hello World endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/balances", (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.status(400).json({
      error: "Missing address parameter",
      usage: "/balances?address=yourAddressHere",
    });
  }

  res.json({
    address: address,
    balance: "1000.00",
    currency: "USD",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
