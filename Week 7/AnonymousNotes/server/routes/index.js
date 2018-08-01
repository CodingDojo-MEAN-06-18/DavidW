//barreling and using modular routing

const noteRoute = require('./note.routes') //relative routing
const router = require('express').Router();

module.exports = router.use('notes', noteRoute) // mount the note route on a particular path/prefix 
    // merge /notes with all the other routes we created in note.routes.js like /notes/:note_id