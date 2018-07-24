const Quote = require("../models/quote.js");

// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
        res.render('welcome');
    },
    show: function(req, res){
        Quote.find({}, function(err, quotes) {
            res.render('quotes', {quotes: quotes});
        })
    },
    create: function(req, res) {
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if(err) {
                console.log('something went wrong');
            } else { 
                console.log('successfully added a quote!');
                res.redirect('/quotes');
            }
        })
    },
};
