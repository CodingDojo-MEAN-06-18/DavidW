//barreling
const taskController = require('./task.controller') //relative path

// grab all of our controllers once we have multiple controllers and then reference just the controller folder and index and you will get them all
module.exports = {
    taskController, 
}