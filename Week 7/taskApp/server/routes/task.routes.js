const { taskController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', taskController.index)
    .post('/', taskController.create)
    .get('/show/:id', taskController.show)
    .put('/edit/:id', taskController.update)
    .delete('/destroy/:id', taskController.destroy);
