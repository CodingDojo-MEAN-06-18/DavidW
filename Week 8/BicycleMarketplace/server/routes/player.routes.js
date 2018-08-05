const { playerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', playerController.index)  //actually --> ('/players')
    .post('/', playerController.create) //actually --> ('/players')
