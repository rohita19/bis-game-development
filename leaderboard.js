const express = require("express");
const Score = require("./models/Score");

const router = express.Router();

router.post("/save-score", async (req, res) => {
  const { username, score } = req.body;
  await Score.create({ username, score });
  res.json({ message: "Score saved!" });
});

router.get("/leaderboard", async (req, res) => {
  const scores = await Score.find().sort({ score: -1 }).limit(10);
  res.json(scores);
});

module.exports = router;
