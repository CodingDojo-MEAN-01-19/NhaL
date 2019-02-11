// Dependencies
const express = require('express');
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  path = require('path');
const  port = 8000;

// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create connection to database
const connection = mongoose.connect("mongodb://localhost/bird_db",{useNewUrlParser: true});

// Create dog schema and attach it as a model to our database
const BirdSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

const Bird = mongoose.model('Bird', BirdSchema);

// Routes go here!
app.get('/', function(req, res){
  Bird.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { birds: results });
  });
});

// Create
app.post('/', function(req, res){
  // Create a new dog!
  Bird.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Bird.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { bird: response });
  });
});

app.get('/:id/edit/', function(req, res){
  Bird.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { bird: response });
  })
});

// Update
app.post('/:id', function(req, res){
  Bird.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Bird.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
});