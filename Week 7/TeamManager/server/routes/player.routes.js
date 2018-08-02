const { playerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', playerController.index)
    .post('/', playerController.create)
    .get('/show/:id', playerController.show)
    .put('/edit/:id', playerController.update)
    .delete('/destroy/:id', playerController.destroy);
