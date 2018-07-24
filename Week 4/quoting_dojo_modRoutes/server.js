const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const server = app.listen(8000);

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)


  