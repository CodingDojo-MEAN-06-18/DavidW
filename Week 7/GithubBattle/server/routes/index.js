//barreling and using modular routing

const playerRoute = require('./player.routes') //relative routing
const router = require('express').Router();

module.exports = router.use('players', playerRoute) 
