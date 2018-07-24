const session = require('express-session');
var count = 0;
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

const sessionConfig  = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'thisIsSuperSekret'
  };

app.use(bodyParser.urlencoded({ extended: true }));
// static content
// app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index", {count});
    // adds one to count everytime
    count += 1;
})

// resets counter
app.post('/reset', function(req, res) {
    // reset count to 0
    count = 0;
    res.redirect('/')
   })

//route for adding 2 to count
app.post('/count', function(req, res) {
    // only adds one since the route will be revisited and count a second time
    count += 1;
    res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
