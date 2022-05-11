const fs = require("fs");
const path = require("path");

// function createNewNote(body, notesArray) {
//     let note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, '../db/db.json'),
//       JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
//   }

function getNotes() {
let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))
allNotes = JSON.parse(allNotes)

return allNotes;
}


  module.exports = {
    getNotes
  };