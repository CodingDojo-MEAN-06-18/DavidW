var count = 0;
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// static content
// app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
})

// route for results from the form
app.post('/result', function(req, res) {
    var results_req = req.body;
    var data = {
        name: req.body.name, 
        dojoLocation: req.body.dojoLocation, 
        favoriteLanguage: req.body.favoriteLanguage, 
        comment: req.body.comment
    }
    res.render("result", {data: data});
   })

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
