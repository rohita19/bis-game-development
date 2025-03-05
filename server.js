const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://your-mongo-url");

const ScoreSchema = new mongoose.Schema({ username: String, score: Number });
const Score = mongoose.model("Score", ScoreSchema);

app.post("/save-score", async (req, res) => {
    const { username, score } = req.body;
    await new Score({ username, score }).save();
    res.send("Score saved!");
});

app.get("/leaderboard", async (req, res) => {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
});

app.listen(5000, () => console.log("Server running on port 5000"));
