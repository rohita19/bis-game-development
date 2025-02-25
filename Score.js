const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  username: String,
  score: Number,
});

module.exports = mongoose.model("Score", ScoreSchema);
