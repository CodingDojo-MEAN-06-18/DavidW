const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

// require('./server/config/database');

app
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, 'dist/pokemon' )))
    // .use('/api', require('./server/routes'))
    // .use('/tasks', require('./server/routes/task.routes'))
    // .use(require('./server/routes/catch-all.routes'))
    .listen(port, () => console.log(`express listening on port ${ port }`));