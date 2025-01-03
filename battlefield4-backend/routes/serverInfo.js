import express from "express";
import ServerInfo from "../models/serverInfo.js";

const router = express.Router();

// Fetch server info
router.get("/", async (req, res) => {
  try {
    const serverInfo = await ServerInfo.findOne().sort({ _id: -1 }); // Fetch the first entry in the collection
    console.log(serverInfo);
    if (!serverInfo) {
      return res.status(404).json({ message: "Server info not found" });
    }
    res.status(200).json(serverInfo);
  } catch (error) {
    console.error("Error fetching server info:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Add or update server info
router.post("/", async (req, res) => {
  const { name, map, maxplayers, players, ping } = req.body;

  try {
    let serverInfo = await ServerInfo.findOne();

    if (serverInfo) {
      // Update existing server info
      serverInfo.name = name;
      serverInfo.map = map;
      serverInfo.maxplayers = maxplayers;
      serverInfo.players = players;
      serverInfo.ping = ping;
      await serverInfo.save();
      return res.status(200).json({ message: "Server info updated" });
    }

    // Create new server info
    serverInfo = new ServerInfo({ name, map, maxplayers, players, ping });
    await serverInfo.save();
    res.status(201).json({ message: "Server info added" });
  } catch (error) {
    console.error("Error saving server info:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Populate sample data
router.post("/populate", async (req, res) => {
    const sampleData = {
        name: "! RC3-BASEMAPS",
        details: "🇺🇸 CONQUEST LARGE · LANGCANG DAM · CUSTOM · 60 HZ",
        description:
          "Server protected by The.K-50 Anticheat. Vip Rules, Questions, Request, Appeal, Visit: discord.gg/3r5Nk4d",
        score: 13672,
        players: 60,
        maxPlayers: 64,
        ping: 104,
        tickrate: 60,
        settings: {
          region: "Europe - DE",
          punkbuster: "On",
          fairfight: "On",
          password: "Off",
          preset: "Normal",
        },
        advanced: {
          minimap: "On",
          squadLeaderSpawn: "Off",
          vehicles: "On",
          teamBalance: "On",
          minimapSpotting: "On",
          hud: "On",
          vehicleCam: "On",
          regenerativeHealth: "On",
          killCam: "On",
          friendlyFire: "Off",
          spotting3D: "On",
          enemyNameTags: "On",
        },
        rules: {
          tickets: 400,
          vehicleSpawnDelay: 25,
          bulletDamage: 100,
          kickAfterTeamKills: 5,
          playerHealth: 100,
          playerRespawnTime: 100,
          kickAfterIdle: 300,
          banAfterKicks: 3,
        },
        players: [
          { name: "MaryJane", status: "Online" },
          { name: "420", status: "Offline" },
        ],
      };

  try {
    await ServerInfo.create(sampleData);
    res.status(201).json({ message: "Sample data added" });
  } catch (error) {
    res.status(500).json({ message: "Error populating data", error: error.message });
  }
});
// Clear all data from the dataset
router.delete("/clear", async (req, res) => {
    try {
      const result = await ServerInfo.deleteMany({});
      res.status(200).json({ message: "All data cleared", deletedCount: result.deletedCount });
    } catch (error) {
      console.error("Error clearing data:", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  
export default router;
