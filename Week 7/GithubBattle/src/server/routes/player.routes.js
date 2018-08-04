const { noteController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', noteController.index)
    .post('/', noteController.create)
    .get('/show/:id', noteController.show)
    .put('/edit/:id', noteController.update)
    .delete('/destroy/:id', noteController.destroy);
