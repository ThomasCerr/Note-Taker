const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./db/db');
const apiRoutes = require ('./routes/apiRoutes/notesRoutes')
const htmlRoutes = require ('./routes/htmlRoutes/index.js')

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });