const { userController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', userController.index)  //actually --> ('/users')
    .post('/', userController.create) //actually --> ('/users')
