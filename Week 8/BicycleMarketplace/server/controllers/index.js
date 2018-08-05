//barreling
const bikeController = require('./bike.controller') //relative path
const userController = require('./user.controller')

// grab all of our controllers once we have multiple controllers and then reference 
// just the controller folder and index and you will get them all
module.exports = {
    bikeController, 
    userController, 
}