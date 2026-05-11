require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const authroute = require("./routes/auth.routes");
const cookies = require("cookie-parser");
const cookieParser = require("cookie-parser");
const postroute = require("./routes/post.routes");

connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes api/auth/register

app.use("/api/auth", authroute);
app.use("/api/post", postroute);

module.exports = app;
