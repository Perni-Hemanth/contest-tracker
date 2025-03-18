const express = require("express");
const axios = require("axios");
const Contest = require("../models/Contest");

const router = express.Router();

// Fetch contests from external APIs
router.get("/", async (req, res) => {
  try {
    let contests = await Contest.find();
    res.json(contests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a contest (Admin use)
router.post("/", async (req, res) => {
  const contest = new Contest(req.body);
  await contest.save();
  res.json(contest);
});

module.exports = router;
