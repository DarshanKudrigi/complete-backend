const express = require ("express");
const multer = require ("multer");
const uploadImage = require ("./services/storage.service");
const postmodel = require ("./models/post.models");

const app = express();

app.use(express.json());

const storage = multer({ storage : multer.memoryStorage()});

app.post( "/create-post", storage.single("image"),async (req,res)=>{
    
    console.log(req.file);

    const result = await uploadImage(req.file.buffer, req.body.title, req.body.caption);

    const post = await postmodel.create({
        image : result.url,
        title : req.body.title,
        caption : req.body.caption
    });

    console.log(result);
    console.log(post);

    res.send("post created");
});

app.get("/posts", async (req,res)=>{
    const posts = await postmodel.find();
     return res.status(200).json({
        message : "Posts fetched successfully",
        posts  
     });
});

module.exports = app;