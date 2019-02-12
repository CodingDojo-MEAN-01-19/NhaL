const mongoose = require('mongoose');

const Quote = mongoose.model('quotes');

module.exports = function(app){

// Here are our routes!
app.get('/', function(req, res) {
    res.render('welcome');
  });
  
  app.get('/quotes', function(req, res) {
    // Logic to grab all quotes and pass into the rendered view
    Quote.find({}, function(err, quotes) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: quotes });
    });
  });
  
  app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err) {
      if (err) { console.log(err); }
      res.redirect('/quotes');
    });
  });
  // END OF ROUTING...


} 