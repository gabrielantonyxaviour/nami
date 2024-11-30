const axios = require("axios");
require("dotenv").config();

async function testTwitter() {
  try {
    const response = await axios.get(
      "https://api.twitter.com/2/tweets/search/recent",
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
        },
        params: {
          query:
            "disaster OR emergency OR earthquake OR flood OR fire lang:en -is:retweet",
          "tweet.fields": "created_at,geo,author_id",
          max_results: 10,
        },
      }
    );

    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

testTwitter();
