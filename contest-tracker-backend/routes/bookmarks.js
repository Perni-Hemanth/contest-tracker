const express = require("express");
const Bookmark = require("../models/Bookmark");

const router = express.Router();

// Get user bookmarks
router.get("/:userId", async (req, res) => {
  const bookmarks = await Bookmark.find({ userId: req.params.userId }).populate("contestId");
  res.json(bookmarks);
});

// Add bookmark
router.post("/", async (req, res) => {
  const bookmark = new Bookmark(req.body);
  await bookmark.save();
  res.json(bookmark);
});

module.exports = router;
