const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb+srv://itsdarshankudrigi_db_user:Darshan%4012345Secure!@backend.vhwezct.mongodb.net/project1")
        console.log("Connected to MongoDB successfully!");
    };

module.exports = connectDB;