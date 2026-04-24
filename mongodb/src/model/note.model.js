const  mongoose = require("mongoose");

const notesschema = new mongoose.Schema({
    title: String,
    description: String,
    age: Number,
});
const notemodel = mongoose.model("HNR", notesschema);

module.exports = notemodel;