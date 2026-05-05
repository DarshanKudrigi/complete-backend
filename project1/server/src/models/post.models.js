const mongoose = require ('mongoose');
const { post } = require('../app');


const  postschema = new mongoose.Schema ({
    image : String ,
    title : String,
    caption : String
});

const postmodel = mongoose.model("Post", postschema);

module.exports = postmodel;