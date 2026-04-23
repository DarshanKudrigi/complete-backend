const express = require('express');
const app = express();
const port = 3000;  



 app.use(express.json());



const notes = [];







app.post('/notes', (req, res) => {
    console.log('Received a note');
    res.status(201).json({ message: ' Message aya hai bhai' }); 
    notes.push(req.body);
    //console.log(notes);
});






app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes
    });
});






app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    if (!notes[id]) {
        return res.status(404).json({ message: 'Note not found' });
    }

    delete notes[id];
    res.status(200).json({ message: 'Note deleted successfully' });
});



app.post('/amd', (req, res) => {
    console.log('Received a note');
    res.status(201).json({ message: ' Message aya hai bhai' }); 
    notes.push(req.body);
});


app.get('/amd', (req, res) => {
    res.status(200).json({
        message: 'Note retrieved successfully',
        note: notes
    });
});



app.patch("/notes/:id", (req, res) => {
    const id =req.params.id;
    const hel = req.body.hel;

    notes[id].hel = hel;

    res.status(200).json({
        message: "Successfully Updated",
    });

});

module.exports = app

