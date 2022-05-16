const fs = require("fs");
const path = require("path");

function getNotes() {
let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))
allNotes = JSON.parse(allNotes)

return allNotes;
}


  module.exports = {
    getNotes
  };