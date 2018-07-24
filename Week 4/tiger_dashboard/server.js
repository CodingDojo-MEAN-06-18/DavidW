const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const server = app.listen(8000);
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/tiger_db');

var TigerSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 4},
    type:  { type: String, required: true, minlength: 3}
}, {timestamps: true });

mongoose.model('Tiger', TigerSchema);
var Tiger = mongoose.model('Tiger')
   
// GET '/' Displays all of the tigers.
app.get('/', function(req, res) {
    Tiger.find({}, function(err, tigers) {
      res.render('index', {tigers: tigers});
    })
})

// GET '/tigers/edit/:id' Should show a form to edit an existing tiger.
app.get('/tigers/edit/:id/', function(req, res){
    Tiger.find({ _id: req.params.id }, function(err, response) {
        console.log(req.params.id)
      if (err) { console.log(err); }
      res.render('editTiger', { tiger: response[0] });
    })
});

// GET '/tigers/new' Displays a form for making a new tiger.
app.get('/tigers/new', function(req, res) {
      res.render('tigerNew');
})

// GET '/tigers/:id' Displays information about one tiger.
app.get('/tigers/:id', function(req, res){
    Tiger.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('showTiger', { tiger: response[0] });
    });
  });

// POST '/tigers' Should be the action attribute for the form in the above route (GET '/tigers/new').
app.post('/tigers', function(req, res) {
    var tiger = new Tiger({name: req.body.name, type: req.body.type});
    console.log(`Tiger: ${tiger}`)
    tiger.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a tiger!');
            res.redirect('/');
        }
    })
})

// POST '/tigers/:id' Should be the action attribute for the form in the above route (GET '/tigers/edit/:id').
app.post('/tigers/:id', function(req, res){
    Tiger.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });

// POST '/tigers/destroy/:id' Should delete the tiger from the database by ID.
app.post('/tigers/destroy/:id', function(req, res){
    Tiger.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });