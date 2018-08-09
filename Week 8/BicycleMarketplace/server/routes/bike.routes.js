const { bikeController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', bikeController.index) // actually --> ('/bikes')
    .post('/', bikeController.create) // actually --> ('/bikes')
    .get('/:bike_id', bikeController.show) // actually --> ('/bikes/xxx')
    .put('/update/:bike_id', bikeController.update) // actually --> ('/bikes/xxxx')
    .delete('/:bike_id', bikeController.destroy); // actually --> ('/bikes/xxxx')
