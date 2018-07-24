/* i can get all the data from each route i visit but i cant seem to return that data
back to my index.ejs file to display without having to refresh the page. 

once i figure this out im sure i can add buttons to change the counters and use recursion to
loop through the data so i can get all the information needed but transfering the information without
redirecting or rendering in different routes i havent figured out. 

*/



const axios = require('axios');
var session = require('express-session');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var url = "https://swapi.co/api/people/";
var count = 0;

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
    context = {
        body: req.session.body
    }
    res.render("index", {context: context});
})

app.get('/people', function(req, res){
    count += 1
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url + count)
    .then(data => {
        // log the data before moving on! 
        // console.log(data);
        console.log(`THIS IS THE DATA IM LOOKING FOR ------------> ${data.data.name}`)
        res.session.body += data.data.name
        // console.log(res.session.body)
        // rather than rendering, just send back the json data!
        res.json(data);
    })
    .catch(error => {
        // log the error before moving on!
        // console.log(error);
        res.json(error);
    })
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
   });