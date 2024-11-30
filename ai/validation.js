const express = require("express");
const { OpenAI } = require("openai");
const axios = require("axios");
const { google } = require("googleapis");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

class CharityValidator {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.customSearch = google.customsearch("v1");
    this.searchApiKey = process.env.GOOGLE_API_KEY;
    this.history = [];
  }

  async searchWeb(query) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1`,
        {
          params: {
            key: this.searchApiKey,
            cx: "905d0f2d2dbee4ce1",
            q: query,
          },
        }
      );
      return response.data.items || [];
    } catch (error) {
      console.error("Search error:", error);
      return [];
    }
  }

  async getSearchQuery(query) {
    const messages = [
      {
        role: "system",
        content:
          "You are an assistant that helps to verify charity operations and their completions. Convert the input text into a search query that will help find evidence of the charity work being completed.",
      },
    ];

    this.history.forEach((message) => {
      messages.push({ role: "user", content: message[0] });
    });

    messages.push({
      role: "user",
      content: `Create a search query to verify this charity operation: ${query}`,
    });

    const completion = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages,
      temperature: 0,
    });

    return completion.choices[0].message.content.trim();
  }

  async validateOperation(operationDetails) {
    const searchQuery = await this.getSearchQuery(operationDetails);
    console.log("Searching for validation:", searchQuery);

    const searchResults = await this.searchWeb(searchQuery);

    const messages = [
      {
        role: "system",
        content: `You are an assistant that verifies charity operations. Analyze the search results and determine:
                     1. If the charity operation was completed
                     2. Create a tweet about the funds release
                     3. Extract relevant dates and details
                     Return the response in this format only:
                     {
                         "isCompleted": true/false,
                         "tweet": "tweet text",
                         "sources": array of strings,
                         "completionDate": "YYYY-MM-DD",
                         "organizationName": "name",
                         "amountReleased": number,
                         "beneficiaries": "description",
                         "disasterType": "type",
                         "location": "place",
                         "confidence": number (0-100)
                     }`,
      },
    ];

    let searchContent = "Analyze these search results:\n\n";
    searchResults.forEach((result) => {
      searchContent += `URL: ${result.link}\nTitle: ${result.title}\nContent: ${result.snippet}\n\n`;
    });

    messages.push({
      role: "user",
      content: `${searchContent}\n\nVerify this charity operation: ${operationDetails}`,
    });

    const completion = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages,
      temperature: 0.7,
    });

    const response = JSON.parse(completion.choices[0].message.content);
    this.history.push([operationDetails, JSON.stringify(response)]);

    return response;
  }
}

// Initialize validator
const validator = new CharityValidator();

// Routes
app.post("/api/validate", async (req, res) => {
  try {
    const { operationDetails } = req.body;

    if (!operationDetails) {
      return res.status(400).json({
        success: false,
        error: "Operation details are required",
      });
    }

    const result = await validator.validateOperation(operationDetails);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to validate charity operation",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something broke!",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
