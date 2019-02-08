const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000, function() {
    console.log("listening on port 8000");
  });
app.get('/', function(req, res) {
res.render("index");
});

const io = require('socket.io')(server); 


io.on('connection', function(socket) {
    socket.on('updated_message', function(data){
        socket.emit('updated_message', {msg: "You emitted the following information to the server: {name: " + data.name + ", dojolocation: " + data.dojoLocation + ", favlanguage: " + data.favoriteLanguage + ", comment: " + data.comment});
        socket.emit('random_number', {number: Math.floor(Math.random()*100)});
    });
});


