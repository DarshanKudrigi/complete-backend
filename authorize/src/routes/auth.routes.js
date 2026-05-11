const express = require("express");
const authcontroller = require("../controllers/auth.controllers");

const router = express.Router();

router.post("/register", authcontroller.registeruser);

router.get("/test", (req, res) => {
    console.log(req.cookies);
    res.json({ message: "Test route", cookies: req.cookies });
});

module.exports = router;
