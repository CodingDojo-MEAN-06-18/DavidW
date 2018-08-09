const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
    saveUninitialized: true,
    secret: 'session-secret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000,
    },
};

const cookieSecret = process.env.COOKIE_SECRET || 'mysecretKeyMMMMhmmmmokCool';

require('./server/config/database');

app.use(logger('dev'))
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname, 'dist/BicycleMarketplace' )))
  .use(cookieParser(cookieSecret))
  .use(session(sessionConfig))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.routes'))
  .listen(port, () => console.log(`Express listening on port ${ port }`));

// edit these out possibly......
//   .use('/users', require('./server/routes/user.routes')) 
  // connects the base /users route from the path given
//   .use('/bikes', require('./server/routes/bike.routes')) 
  // connects the base /bikes route from the path given
//    