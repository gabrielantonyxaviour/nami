const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";

class GoogleChat {
  constructor() {
    this.openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    this.customSearch = google.customsearch("v1");
    this.history = [];
  }

  async _search(query) {
    try {
      const response = await this.customSearch.cse.list({
        auth: GOOGLE_API_KEY,
        cx: "22519d08efb844a5d",
        q: query,
      });
      return response.data.items || [];
    } catch (error) {
      throw new Error(`Google Search API error: ${error.message}`);
    }
  }

  async _getSearchQuery(query) {
    try {
      const messages = [
        {
          role: "system",
          content:
            "You are an assistant that helps to convert text into a web search engine query. " +
            "You output only 1 query for the latest message and nothing else.",
        },
      ];

      this.history.forEach((message) => {
        messages.push({ role: "user", content: message[0] });
      });

      messages.push({
        role: "user",
        content:
          `Based on my previous messages, what is the most relevant web search query for the text below?\n\n` +
          `Text: ${query}\n\nQuery:`,
      });

      const response = await this.openai.chat.completions.create({
        messages,
        model: "gpt-4-turbo",
        temperature: 0,
      });

      console.log(response);
      return response.choices[0].message.content.trim().replace(/"/g, "");
    } catch (error) {
      throw new Error(
        `OpenAI API error in search query generation: ${error.message}`
      );
    }
  }

  async getResponse(query) {
    try {
      const searchQuery = await this._getSearchQuery(query);
      const messages = [
        {
          role: "system",
          content: `You are a search assistant that searches for recent disasters across the web and make a tweet which is humanlike with emojis 
                MOST IMPORTANT: You will only receive a date. You should search the web for disasters which took place on that date, or a disaster which happened recent to that date and use it. 
                the tweet should contain a short summary of the disaster, the damages caused and the requirements needed by the people in those affected areas and the cost to meet those demands in USD 
                the tweet should talk about a disaster which happened only in the month of November 2024 and you should talk about only ONE disaster, don't club more disasters together as a single tweet 
                Your response should be in this specific format ONLY!!! 
                Tweet: [the tweet content for the recent disaster as per the instructions provided with a short summary of the disaster, damages caused, commodities needed by the people in the affected area, the amount of funds needed, hashtags. And please make the tweet sound as much as human as possible!!!] 
                Disaster: [what disaster took place eg: tsunami, drought, earthquake, fire etc.] 
                Location: [the area where the disaster took place] 
                timeAndDate: [the date and approx time at which the disaster took place] 
                fundsNeeded: [the amount of funds needed by the people in that affected area as a UINT256 value]`,
        },
      ];

      this.history.forEach((message) => {
        messages.push({ role: "user", content: message[0] });
        if (message[1]) {
          messages.push({ role: "assistant", content: message[1] });
        }
      });

      const results = await this._search(searchQuery);
      let prompt =
        "Answer query using the information from the search results below: \n\n";

      results.forEach((result) => {
        prompt += `Link: ${result.link}\n`;
        prompt += `Title: ${result.title}\n`;
        prompt += `Content: ${result.snippet}\n\n`;
      });

      prompt += `Query: ${query}`;
      messages.push({ role: "user", content: prompt });

      const response = await this.openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
        temperature: 0.4,
      });
      console.log(response);
      const responseText = response.choices[0].message.content;
      this.history.push([query, responseText]);

      return {
        response: responseText,
        search_query: searchQuery,
      };
    } catch (error) {
      throw new Error(`Error processing request: ${error.message}`);
    }
  }
}

// Initialize the bot
const bot = new GoogleChat();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Disaster Tweet Generator API",
    version: "1.0.0",
    endpoints: {
      "/chat": "POST - Generate disaster-related tweets",
      "/": "GET - This information",
    },
  });
});

// Routes
app.post("/chat", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }
    const result = await bot.getResponse(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to the Nami AI Agent API. Nami is an autonomous AI agent that discovers global human disasters, helps collect funding and keeps NGO’s accountable",
    version: "1.0.0",
    endpoints: {
      "/listen-for-events": "POST - Generate disaster-related tweets",
      "/": "GET - This information",
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status_code: 500,
    detail: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
