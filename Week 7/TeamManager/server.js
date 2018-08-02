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
  .use(express.static(path.join(__dirname, 'dist/TeamManager' )))
  .use('/api', require('./server/routes'))
  .use('/players', require('./server/routes/player.routes'))
  .use(require('./server/routes/catch-all.routes'));

  
app.listen(port, () => console.log(`express listening on port ${ port }`));
