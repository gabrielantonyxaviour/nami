const express = require("express");
const app = express();
const port = 3001;

// Serve static files
app.use(express.static("public"));

// Main endpoint that serves the donation page
app.get("/donate", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Donate</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f5f5f5;
        }
        .donate-button {
          padding: 12px 24px;
          font-size: 18px;
          background-color: #2ecc71;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .donate-button:hover {
          background-color: #27ae60;
        }
      </style>
    </head>
    <body>
      <button class="donate-button" onclick="window.open('https://your-payment-processor.com')">
        Donate Now
      </button>
    </body>
    </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/donate`);
});
