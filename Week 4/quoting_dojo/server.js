/* everything commented out is for the two things i couldnt figure oute
1. express flash-  i kept getting "Error: req.flash() requires sessions"

this was in my welcome.ejs file....
tip to easily see objects printed in full instead of [object Object]
<% if(messages) { %>
    <%- JSON.stringify(messages) %> 
based on the structure of your messages, determine how to display them
    <% if(messages.quotes) { %>
        <% for (var x of messages.quotes) { %>
            <h3><%= x %></h3>
        <% } %>
    <% } %>
<% } %>

2. i dont know when to use this.... mongoose.Promise = global.Promise */

const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const server = app.listen(8000);
var mongoose = require('mongoose');
// var flash = require('express-flash');
// const sessions = require('express-sessions');
// app.use(flash());

// Use native promises
// mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + './public/dist/public/index' ));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose_db');


var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 6},
    quote: { type: String, required: true, minlength: 2, maxlength: 30}
}, {timestamps: true });

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')
   
// Routes
app.get('/', function(req, res) {
    res.render('welcome');
    // res.render('welcome', {messages: req.flash() });
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        // db.products.find().sort({"created_at": 1}
        // console.log(quotes);
      res.render('quotes', {quotes: quotes});
    })
})

app.post('/quotes', function(req, res) {
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
        if(err) {
            console.log('something went wrong');
//             for(var key in err.errors){
//                 req.sessions.messages += err.errors[key].message;
//                 req.flash('welcome', err.errors[key].message);
//             }
//             res.redirect('/');
        } else { 
            console.log('successfully added a quote!');
            res.redirect('/quotes');
        }
    })
})