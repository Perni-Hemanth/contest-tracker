require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Ensure this function reads from process.env

app.use("/api/contests", require("./routes/contests"));
app.use("/api/bookmarks", require("./routes/bookmarks"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
