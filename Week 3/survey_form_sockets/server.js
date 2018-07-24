//node module for path representing the url path string
var path = require("path");

// add node express module and attaching it to an app instance 
var express = require("express");
var app = express();

// node module middlewear to help parse information 
var bodyParser = require('body-parser');

// server with route attached to our express app instance and works with all information from index.js
var server = app.listen(8811, function() {
    console.log("listening on port 8811");
});
var route = require('./routes/index.js')(app, server);


// sets up bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// sets up views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
})

