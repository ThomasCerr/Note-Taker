
const fs = require("fs");
const uuid = require('uuid')
const { getNotes } = require('../../lib/notes');
// const { notes } = require('../data/db');
const router = require('express').Router();
const path = require("path");
const db = require("../../db/db.json");
let jsonData = [];

var refreshNotes = router.get('/api/notes', (req, res) => {
  // set id based on what the next index of the array will be
  // req.body.id = notes.length.toString();

  //   const note = createNewNote(req.body, notes);
  //   res.json(note);
res.json(getNotes())
  
});
router.post('/api/notes', (req, res) => {
  if(!req.body.title || !req.body.text) {
    return res.status(400).json({ msg: 'Please include a title and text'})
   }
   const newNote= {
     id: uuid.v4(),
     title: req.body.title,
     text: req.body.text,
   }
  jsonData.push(newNote);
 let data = JSON.stringify(jsonData);

   fs.writeFileSync(path.join(__dirname + '../../../db/db.json'), data );
   window.location.reload();
  });

 

  module.exports= router