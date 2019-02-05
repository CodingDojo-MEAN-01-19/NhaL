var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
  response.render('index');
})

app.get("/cars", function (request, response){
  response.render('cars');
})

app.get("/cats", function (request, response){
  response.render('cats');
})

app.get("/new", function (request, response){
  response.render('new');
})

app.get("/ruby_cat", function (request, response){
  response.render('ruby_cat');
})