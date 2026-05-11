const usermodel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


async function registeruser(req, res) {
  try {
    const username = String(req.body?.username || "").trim();
    const email = String(req.body?.email || "").trim().toLowerCase();
    const password = String(req.body?.password || "");

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required" });
    }

    const existingUser = await usermodel.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
      username,
      password: hashedPassword,
      email,
      role: "user",
    });

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token", jwtToken);

    const userSafe = user.toObject();
    delete userSafe.password;

    return res.status(201).json({ message: "User registered", user: userSafe });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed" });
  }
}

async function loginuser(req, res) {  
  try {
    const username = String(req.body?.username || "").trim();
    const email = String(req.body?.email || "").trim().toLowerCase();
    const password = String(req.body?.password || "");

    if (!password || (!username && !email)) {
      return res.status(400).json({ message: "Email or username and password are required" });
    }

    const query = [];
    if (username) query.push({ username });
    if (email) query.push({ email });

    const user = await usermodel.findOne({ $or: query });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token", jwtToken);

    const userSafe = user.toObject();
    delete userSafe.password;

    return res.json({ message: "Login successful", user: userSafe });
  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
}

module.exports = { registeruser, loginuser };
