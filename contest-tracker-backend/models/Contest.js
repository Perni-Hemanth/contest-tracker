const mongoose = require("mongoose");

const ContestSchema = new mongoose.Schema({
  title: String,
  date: Date,
  platform: String,
  url: String,
  status: { type: String, enum: ["upcoming", "past"] },
  solutionLink: String,
});

module.exports = mongoose.model("Contest", ContestSchema);
