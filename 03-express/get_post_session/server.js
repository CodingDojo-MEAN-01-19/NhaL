var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});

// route to process new user form data:
app.post('/users', function (req, res){
  console.log("POST DATA \n\n", req.body)
  //code to add user to db goes here!
  // redirect the user back to the root route.  
  res.redirect('/')
});

app.get("/users/:id", function (req, res){
  console.log("The user id requested is:", req.params.id);
  // just to illustrate that req.params is usable here:
  res.send("You requested the user with id: " + req.params.id);
  // code to get user from db goes here, etc...
});