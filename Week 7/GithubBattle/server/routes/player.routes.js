const { playerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/getPlayers', playerController.index)
    .post('/addPlayer', playerController.create)
