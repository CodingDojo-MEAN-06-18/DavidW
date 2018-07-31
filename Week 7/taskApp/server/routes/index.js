//barreling and using modular routing

const taskRoute = require('./task.routes') //relative routing
const router = require('express').Router();

module.exports = router.use('tasks', taskRoute) // mount the task route on a particular path/prefix 
    // merge /tasks with all the other routes we created in task.routes.js like /tasks/:task_id