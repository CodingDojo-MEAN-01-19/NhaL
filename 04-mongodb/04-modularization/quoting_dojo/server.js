const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/my_quotes_db')
app.use(bodyParser.urlencoded({ extended: true }));



require('./server/config/database.js');
require('./server/config/routes.js')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})