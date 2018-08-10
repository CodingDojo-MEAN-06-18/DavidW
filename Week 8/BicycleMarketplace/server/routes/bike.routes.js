const { bikeController } = require('../controllers');
const express = require('express')
const router = express.Router();

module.exports = router
    .get('/', bikeController.index) // actually --> ('/bikes')
    .post('/', bikeController.create) // actually --> ('/bikes')
    .put('/update/:bike_id', bikeController.update) // actually --> ('/bikes/xxxx')
    .delete('/:bike_id', bikeController.destroy); // actually --> ('/bikes/xxxx')
