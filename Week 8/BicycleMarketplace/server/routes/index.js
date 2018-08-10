//barreling and using modular routing
const userRoute = require('./user.routes') //relative routing
const bikeRoute = require('./bike.routes') //relative routing
const express = require('express')
const router = express.Router();

module.exports = router.use('/users', userRoute).use('/bikes', bikeRoute);
