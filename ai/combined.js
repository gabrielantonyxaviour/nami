const express = require("express");
const axios = require("axios");
const fs = require("fs").promises;
require("dotenv").config();

const app = express();
const port = 3000;

// async function collectTwitter() {
//   try {
//     const response = await axios.get(
//       "https://api.twitter.com/2/tweets/search/recent",
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
//         },
//         params: {
//           query:
//             "disaster OR emergency OR earthquake OR flood OR fire lang:en -is:retweet",
//           "tweet.fields": "created_at,geo,author_id",
//           max_results: 10,
//         },
//       }
//     );

//     return response.data.data.map((tweet) => ({
//       source: "Twitter",
//       title: tweet.text.substring(0, 100),
//       description: tweet.text,
//       location: tweet.geo,
//       timestamp: new Date(tweet.created_at).toISOString(),
//       type: "social",
//       author_id: tweet.author_id,
//     }));
//   } catch (error) {
//     console.error("Twitter Error:", error.message);
//     return [];
//   }
// }

// Previous collectors remain same
async function collectUSGS() {
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );
    return response.data.features.map((quake) => ({
      source: "USGS",
      title: `M${quake.properties.mag} - ${quake.properties.place}`,
      description: quake.properties.title,
      location: {
        lat: quake.geometry.coordinates[1],
        lng: quake.geometry.coordinates[0],
      },
      timestamp: new Date(quake.properties.time).toISOString(),
      type: "earthquake",
    }));
  } catch (error) {
    console.error("USGS Error:", error.message);
    return [];
  }
}

async function collectReliefWeb() {
  try {
    const response = await axios.get("https://api.reliefweb.int/v1/disasters", {
      params: {
        appname: "DisasterMonitor",
        profile: "list",
        preset: "latest",
        slim: 1,
        limit: 50,
      },
    });
    return response.data.data.map((item) => ({
      source: "ReliefWeb",
      title: item.fields.name,
      description: item.fields.description || item.fields.name,
      location: item.fields.country?.[0]?.name,
      type: item.fields.type?.[0]?.name,
      timestamp: new Date(item.fields.date.created).toISOString(),
      status: item.fields.status,
    }));
  } catch (error) {
    console.error("ReliefWeb Error:", error.message);
    return [];
  }
}

async function loadData() {
  try {
    const data = await fs.readFile("disasters.json", "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveData(newData) {
  const existingData = await loadData();
  const combined = [...existingData, ...newData];
  const unique = Array.from(
    new Map(
      combined.map((item) => [item.title + item.timestamp, item])
    ).values()
  );
  await fs.writeFile("disasters.json", JSON.stringify(unique, null, 2));
}

app.get("/api/disasters", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const [earthquakes, disasters, tweets] = await Promise.all([
      collectUSGS(),
      collectReliefWeb(),
      // collectTwitter(),
    ]);

    // console.log(tweets);

    let allDisasters = [...earthquakes, ...disasters];
    if (startDate || endDate) {
      allDisasters = allDisasters.filter((disaster) => {
        const disasterDate = new Date(disaster.timestamp);
        if (startDate && disasterDate < new Date(startDate)) return false;
        if (endDate && disasterDate > new Date(endDate)) return false;
        return true;
      });
    }

    await saveData(allDisasters);
    res.json(allDisasters);
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
