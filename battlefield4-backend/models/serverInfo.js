import mongoose from "mongoose";

const serverInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  description: { type: String, required: true },
  score: { type: Number, required: true },
  playersCount: { type: Number, required: true, default: 0 },
  maxPlayers: { type: Number, required: true },
  ping: { type: Number, required: true },
  tickrate: { type: Number, required: true },
  settings: {
    region: { type: String, required: true },
    punkbuster: { type: String, required: true },
    fairfight: { type: String, required: true },
    password: { type: String, required: true },
    preset: { type: String, required: true },
  },
  advanced: {
    minimap: { type: String, required: true },
    squadLeaderSpawn: { type: String, required: true },
    vehicles: { type: String, required: true },
    teamBalance: { type: String, required: true },
    minimapSpotting: { type: String, required: true },
    hud: { type: String, required: true },
    vehicleCam: { type: String, required: true },
    regenerativeHealth: { type: String, required: true },
    killCam: { type: String, required: true },
    friendlyFire: { type: String, required: true },
    spotting3D: { type: String, required: true },
    enemyNameTags: { type: String, required: true },
  },
  rules: {
    tickets: { type: Number, required: true },
    vehicleSpawnDelay: { type: Number, required: true },
    bulletDamage: { type: Number, required: true },
    kickAfterTeamKills: { type: Number, required: true },
    playerHealth: { type: Number, required: true },
    playerRespawnTime: { type: Number, required: true },
    kickAfterIdle: { type: Number, required: true },
    banAfterKicks: { type: Number, required: true },
  },
  players: [
    {
      name: { type: String, required: true },
      status: { type: String, required: true },
    },
  ],
}, { timestamps: true });

const ServerInfo = mongoose.model("ServerInfo", serverInfoSchema);

export default ServerInfo;
