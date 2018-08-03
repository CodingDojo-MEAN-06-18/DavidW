//barreling and using modular routing

const playerRoute = require('./player.routes') //relative routing
const gameRoute = require('./game.routes') //relative routing
const router = require('express').Router();

module.exports = router
    .use('players', playerRoute)
    .use('games', gameRoute) // mount the player route on a particular path/prefix 
    // merge /players with all the other routes we created in player.routes.js like /players/:player_id