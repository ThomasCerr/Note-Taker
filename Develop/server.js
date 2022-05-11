const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./db/db');
const apiRoutes = require ('./apiRoutes/notesRoutes')

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(apiRoutes)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });