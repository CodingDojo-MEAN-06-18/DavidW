var session = require('express-session');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyParser.urlencoded({ extended: true }));
// static content
// app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './../views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if (!req.session.number){
        req.session.number = Math.floor((Math.random() * 100) + 1);
        res.render("index");
    } else {
        var data = {
            number: req.session.currentNumber,
            color: req.session.color
        }
        console.log(`Random number is ${req.session.number}`);
        res.render("result", {data: data});
    }
})

// route for results from the form
app.post('/result', function(req, res) {
    // console.log(req.session.input);
    if (req.session.number > req.body.input){
        req.session.color = "red";
        req.session.currentNumber = req.body.input;
        console.log("Too low");
        res.redirect('/')

    } else if (req.session.number < req.body.input){
        req.session.color = "green";
        req.session.currentNumber = req.body.input;
        console.log("Too high");
        res.redirect('/')

    } else {
        console.log("you got it!!");
        res.redirect('/')
    }
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
