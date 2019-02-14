var mongoose = require('mongoose');
var Quote = mongoose.model('NewQuote');

module.exports = {
    
    index: function(req, res) {
        res.render('index');
    },

    create: function(req, res) {
        console.log("POST DATA", req.body);
        var curquote = new Quote({name: req.body.name, quote: req.body.quote})
        curquote.save( function(err) {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a quote!')
        }
        res.redirect('/quotes');
        });
    },

    display: function(req, res) {
        Quote.find({}, function(err, quotes) {
            if (err) { console.log(err) }
            res.render('quotes', {users: quotes})
        });
    }
}