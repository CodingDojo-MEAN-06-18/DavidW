const { userController } = require('../controllers');
const express = require('express')
const router = express.Router();

module.exports = router
    .get('/info/:user_id', userController.index)  //actually --> ('/users/info/xxxx')
    .post('/login', userController.login) //actually --> ('/users/login')
    .post('/register', userController.register) //actually --> ('/users/register')
    .delete('/logout', userController.logout); //actually --> ('/users/logout')
