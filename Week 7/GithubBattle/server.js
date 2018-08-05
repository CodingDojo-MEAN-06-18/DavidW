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
  .use(express.static(path.join(__dirname, 'dist/GithubBattle' )))
  .use('/api', require('./server/routes'))
  .use('/players', require('./server/routes/player.routes')) // connects the base /players route from the path given
  .use(require('./server/routes/catch-all.routes'))
  .listen(port, () => console.log(`Express listening on port ${ port }`));
