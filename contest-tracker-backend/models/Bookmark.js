const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
  userId: String,
  contestId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Bookmark", BookmarkSchema);
