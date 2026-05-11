const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/create",(req,res) => {
    // Handle POST request for creating a new post
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
    }
    catch(err){
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    res.json({ message: "Post created successfully" });

});


module.exports = router;