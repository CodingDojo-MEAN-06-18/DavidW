//barreling and using modular routing
const userRoute = require('./user.routes') //relative routing
const bikeRoute = require('./bike.routes') //relative routing
const router = require('express').Router();

module.exports = router.use('/users', userRoute).use('/bikes', bikeRoute);
