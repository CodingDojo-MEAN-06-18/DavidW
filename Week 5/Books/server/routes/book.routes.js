// non barrelling -------> const { bookController } = require('../controllers/book.controller');  //up a level and require controllers
const { bookController } = require('../controllers');  //up a level and require controllers
const router = require('express').Router(); // create our own router from invoking express and attachign .Router()


// resource based restful routing
module.exports = router  //export router and chain off of it
    .get('/', bookController.index) //refrencing book.controller.js index() method
    .post('/', bookController.create) //refrencing book.controller.js create() method
    .get('/:book_id', bookController.show) //refrencing book.controller.js show() method
    .put('/:book_id', bookController.update) //refrencing book.controller.js update() method
    .delete('/:book_id', bookController.destroy) //refrencing book.controller.js destroy() method