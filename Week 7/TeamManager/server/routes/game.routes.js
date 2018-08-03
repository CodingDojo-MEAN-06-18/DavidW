const { gameController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', gameController.getAllPlayers)
    .post('/activatePlayer/:gameid', gameController.activatePlayer)
    .delete('/deactivatePlayer/:id', gameController.deactivatePlayer);