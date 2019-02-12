const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = 8000;
const app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo',{useNewUrlParser: true});

const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

const Quote = mongoose.model('quotes', quoteSchema);

// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');


// this establish the link to the  routes.js file
require('./server/config/routes.js')(app)

app.listen(port);