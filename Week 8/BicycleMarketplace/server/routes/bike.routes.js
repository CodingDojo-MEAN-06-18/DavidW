const { bikeController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', bikeController.index) // actually --> ('/bikes')
    .post('/', bikeController.create) // actually --> ('/bikes')
