
const fs = require("fs");
const uuid = require('uuid')
const { getNotes } = require('../../lib/notes');
const router = require('express').Router();
const path = require("path");
const db = require("../../db/db.json");
let jsonData = [];

var refreshNotes = router.get('/api/notes', (req, res) => {
  
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
     status: 'active'
   }
  jsonData.push(newNote);
 let data = JSON.stringify(jsonData);

   fs.writeFileSync(path.join(__dirname + '../../../db/db.json'), data );
   window.location.reload();
  });

router.delete('/api/notes/:id'), (req,res) =>{
const found = db.some(db => db.id === parseInt(req.params.id));

if (found) {
  res.json({
    msg: 'Notes Deleted', 
    notes: db.filter(db=>db.id !== parseInt(req.params.id))
  });
} else {
res.status(400).json({msg:`No data with the id of ${req.params.id}`});

}};

  module.exports= router