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

const debug = (method, message, data = {}) => {
  const timestamp = new Date().toISOString();
  console.log(
    JSON.stringify(
      {
        timestamp,
        method,
        message,
        ...data,
      },
      null,
      2
    )
  );
};

class GoogleChat {
  constructor() {
    this.openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    this.customSearch = google.customsearch("v1");
    this.history = [];
  }

  async _search(query) {
    try {
      debug("_search", "Starting Google search", { query });

      // Parse the query date
      const queryDate = new Date(query);
      if (isNaN(queryDate.getTime())) {
        throw new Error("Invalid date format in query");
      }

      // Format dates for search
      const startDate = new Date(queryDate);
      const endDate = new Date(queryDate);
      startDate.setDate(startDate.getDate() - 1); // Include previous day to account for timezone differences
      endDate.setDate(endDate.getDate() + 1);

      // Format dates as YYYY-MM-DD for Google Search API
      const formattedStartDate = startDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];

      const disasterTerms = `
          "natural disaster" OR 
          typhoon OR hurricane OR cyclone OR 
          earthquake OR tsunami OR 
          flood OR flooding OR floods OR 
          wildfire OR "forest fire" OR 
          landslide OR mudslide OR 
          "volcanic eruption" OR volcano OR
          drought OR famine OR
          "extreme weather" OR
          storm OR "severe storm" OR
          "heavy rain" OR
          avalanche OR
          tornado OR
          "humanitarian crisis" OR
          catastrophe OR emergency OR
          disaster OR disasters`;

      const actionTerms = `
          evacuated OR
          killed OR died OR casualties OR
          destroyed OR damaged OR
          stranded OR trapped OR
          emergency response OR
          rescue OR rescued OR
          relief efforts OR
          displaced OR
          affected`;

      const impactTerms = `
          homes OR buildings OR
          infrastructure OR
          "state of emergency" OR
          "disaster declaration" OR
          victims OR survivors OR
          damage OR damages OR
          devastation OR devastated`;

      // Use date range restrictions in the query
      const response = await this.customSearch.cse.list({
        auth: GOOGLE_API_KEY,
        cx: "905d0f2d2dbee4ce1",
        q: `(${disasterTerms}) AND (${actionTerms} OR ${impactTerms})`,
        dateRestrict: null, // Remove the 7-day restriction
        sort: "date",
        num: 10,
        // Use date range parameters
        exactTerms: query, // Look for exact date mentions
        // Use Google's date range search operators
        q: `(${disasterTerms}) AND (${actionTerms} OR ${impactTerms}) after:${formattedStartDate} before:${formattedEndDate}`,
      });

      const results = response.data.items || [];
      debug("_search", "Search completed", {
        resultsCount: results.length,
        dateRange: `${formattedStartDate} to ${formattedEndDate}`,
        firstResult: results[0]
          ? {
              title: results[0].title,
              link: results[0].link,
              snippet: results[0].snippet,
              publishedDate:
                results[0].pagemap?.metatags?.[0]?.["article:published_time"] ||
                "Unknown",
            }
          : null,
      });

      return results;
    } catch (error) {
      debug("_search", "Search failed", {
        error: error.message,
        query,
      });
      throw new Error(`Google Search API error: ${error.message}`);
    }
  }

  async _validateDisasterDate(content, targetDate) {
    try {
      debug("_validateDisasterDate", "Starting validation", {
        targetDate,
        content: content.substring(0, 200),
      });

      // Since we're now searching by publication date, we can simplify the validation
      const messages = [
        {
          role: "system",
          content: `Analyze if this content describes a disaster. 
                     Return JSON: {
                       "isValid": boolean,
                       "isDisaster": boolean,
                       "confidence": number (0-1),
                       "reason": string
                     }`,
        },
        {
          role: "user",
          content: content,
        },
      ];

      const response = await this.openai.chat.completions.create({
        messages,
        model: "gpt-4",
        temperature: 0,
      });

      const result = JSON.parse(response.choices[0].message.content);
      debug("_validateDisasterDate", "Validation complete", { result });

      return {
        ...result,
        isValid: result.isDisaster && result.confidence > 0.7,
      };
    } catch (error) {
      debug("_validateDisasterDate", "Validation failed", {
        error: error.message,
        content: content.substring(0, 100) + "...",
      });
      return { isValid: false, isDisaster: false };
    }
  }

  async _areArticlesRelated(article1, article2) {
    try {
      const messages = [
        {
          role: "system",
          content: `Determine if these two articles describe the same disaster event.
                   Consider location, type of disaster, and timing.
                   Return JSON: { "areSame": boolean, "confidence": number }`,
        },
        {
          role: "user",
          content: `Article 1: ${article1.title}\n${article1.snippet}\n\nArticle 2: ${article2.title}\n${article2.snippet}`,
        },
      ];

      const response = await this.openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
        temperature: 0,
      });

      const result = JSON.parse(response.choices[0].message.content);
      return result.areSame && result.confidence > 0.7;
    } catch (error) {
      debug("_areArticlesRelated", "Comparison failed", {
        error: error.message,
      });
      return false;
    }
  }

  async _groupRelatedArticles(articles) {
    const groups = [];

    for (const article of articles) {
      let foundGroup = false;

      // Try to add to existing group
      for (const group of groups) {
        if (await this._areArticlesRelated(group[0], article)) {
          group.push(article);
          foundGroup = true;
          break;
        }
      }

      // Create new group if no match found
      if (!foundGroup) {
        groups.push([article]);
      }
    }

    return groups;
  }

  async _generateConsolidatedTweet(articles) {
    try {
      debug(
        "_generateConsolidatedTweet",
        "Starting consolidated tweet generation",
        {
          articleCount: articles.length,
        }
      );

      const combinedContent = articles
        .map(
          (article) => `Title: ${article.title}\nContent: ${article.snippet}`
        )
        .join("\n\n");

      const messages = [
        {
          role: "system",
          content: `Generate a comprehensive disaster report with this format:
                 {
                   "title": string (clear, concise title of the disaster event, max 50 chars),
                   "description": string (detailed summary of the situation, max 300 chars),
                   "tweet": string (with emojis, summary, damages, needs),
                   "disaster_type": string,
                   "location": string,
                   "time_and_date": string,
                   "funds_needed": string (UINT256, range between 1000-50000 USD, based on severity),
                   "source_urls": array of strings
                 }
                 Requirements:
                 - Title should be headline-style, focusing on the key disaster and location
                 - Description should cover impact, current status, and immediate needs
                 - Funds needed should be proportional to the disaster scale but conservative
                 - Use all provided articles to create the most complete picture
                 - Be specific about the disaster impact and needs
                 Include all source URLs in the response.`,
        },
        {
          role: "user",
          content: combinedContent,
        },
      ];

      const response = await this.openai.chat.completions.create({
        messages,
        model: "gpt-4",
        temperature: 0.4,
      });

      const tweet = JSON.parse(response.choices[0].message.content);

      // Add all source URLs
      tweet.source_urls = articles.map((article) => article.link);

      debug("_generateConsolidatedTweet", "Tweet generated", { tweet });

      return tweet;
    } catch (error) {
      debug("_generateConsolidatedTweet", "Tweet generation failed", {
        error: error.message,
        articleCount: articles.length,
      });
      return null;
    }
  }
  async getResponse(query) {
    try {
      debug("getResponse", "Starting request", { query });

      const results = await this._search(query);
      const validatedArticles = [];

      // First, validate all articles
      for (const result of results) {
        const validation = await this._validateDisasterDate(
          `${result.title}\n${result.snippet}`,
          query
        );

        if (validation.isValid) {
          validatedArticles.push(result);
        }
      }

      // Group related articles
      const articleGroups = await this._groupRelatedArticles(validatedArticles);

      // Generate one tweet per group
      const consolidatedTweets = [];
      for (const group of articleGroups) {
        const tweet = await this._generateConsolidatedTweet(group);
        if (tweet) {
          consolidatedTweets.push(tweet);
        }
      }

      debug("getResponse", "Request completed", {
        originalResultsCount: results.length,
        validatedArticlesCount: validatedArticles.length,
        groupsCount: articleGroups.length,
        tweetsGenerated: consolidatedTweets.length,
      });

      return {
        response: consolidatedTweets,
        search_results_count: results.length,
        validated_articles_count: validatedArticles.length,
        consolidated_tweets_count: consolidatedTweets.length,
      };
    } catch (error) {
      debug("getResponse", "Request failed", {
        error: error.message,
        query,
      });
      throw new Error(`Error processing request: ${error.message}`);
    }
  }
}

// Initialize the bot
const bot = new GoogleChat();

// Routes remain the same...
app.post("/find", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      debug("POST /find", "Invalid request - missing query");
      return res.status(400).json({ error: "Query is required" });
    }
    const result = await bot.getResponse(query);
    res.json(result);
  } catch (error) {
    debug("POST /find", "Request failed", { error: error.message });
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  debug("GET /", "Health check request");
  res.json({
    message: "Welcome to the Nami AI Agent API",
    version: "1.0.0",
    endpoints: {
      "/chat": "POST - Generate disaster-related tweets",
      "/": "GET - This information",
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug("Server", `Server started on port ${PORT}`);
});

module.exports = app;
