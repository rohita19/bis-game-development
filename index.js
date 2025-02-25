const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log("Server running on port 5000"));
const authRoutes = require("./auth");
app.use("/auth", authRoutes);
const leaderboardRoutes = require("./leaderboard");
app.use("/leaderboard", leaderboardRoutes);
