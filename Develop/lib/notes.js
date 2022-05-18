const fs = require("fs");
const path = require("path");

function getNotes() {
let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))
allNotes = JSON.parse(allNotes)

return allNotes;
}

function deleteNotes(id){
  var allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))
  var parseAllNotes = JSON.parse(allNotes)
  var found = parseAllNotes.some(note=> note.id === id);

  if (found) {
   var data =  parseAllNotes.filter(note=>note.id !== id)
   return data;

}else {
  return parseAllNotes;
}}

function addNote(note){
  var allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))
  var parseAllNotes = JSON.parse(allNotes)
  parseAllNotes.push(note);
  return parseAllNotes;



}


  module.exports = {
    getNotes,
    deleteNotes,
    addNote
  };