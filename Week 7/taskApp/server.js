const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');


const port = process.env.PORT || 8000;
const app = express();
require('./server/config/database');

app.use(logger('dev'))
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname, 'dist/taskApp' )))
  .use('/api', require('./server/routes'))
  .use('/tasks', require('./server/routes/task.routes'))
  .use(require('./server/routes/catch-all.routes'));

  
app.listen(port, () => console.log(`express listening on port ${ port }`));
  
  // routes
  // app.use(express.static(path.join(__dirname, 'taskApp/src/app')))  
