const express = require('express');
const notemodel = require("./model/note.model");

const app = express();

const port = 3000;

app.use(express.json());



app.post("/notes", async (req, res) => {
    const data = req.body;
   // const note = await notemodel.create(data);
    await notemodel.create({
        title: data.title,
        description: data.description,
        age: data.age
    })
    res.status(201).json({ message: "Note created successfully" });
    console.log("Note created successfully");
});





module.exports = app;
