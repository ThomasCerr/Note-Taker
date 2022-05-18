
const fs = require("fs");
const uuid = require('uuid')
const { getNotes,deleteNotes,addNote } = require('../../lib/notes');
const router = require('express').Router();
const path = require("path");



router.get('/api/notes', (req, res) => {
  
res.json(getNotes())
 return res.status(200); 
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

   
  var data = JSON.stringify(addNote(newNote))
 fs.writeFileSync(path.join(__dirname + '../../../db/db.json'), data);
   res.sendFile(path.join(__dirname, '../../public/notes.html'));
   return res.status(200)
  });

  
router.delete('/api/notes/:id', (req,res) =>{
  fs.writeFileSync(path.join(__dirname + '../../../db/db.json'),JSON.stringify(deleteNotes(req.params.id)));
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
 
  return res.status(200);
  

}
);

  module.exports= router