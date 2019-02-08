const express = require('express');
const path =require('path');
const port = process.env.PORT||8000;
const app = express(); 

app.use(express.static(path.join(__dirname, 'client')));

const server = app.listen(8000, function() {
    console.log("listening on port 8000");
  });
const io = require('socket.io')(server);

let count = 0;
io.on('connection', socket =>{
 
    console.log('incoming socket connection');

    socket.on('buttonClicked', function(){
        numberUpdated(++count);

    });

    socket.on('reset', function(){
        count =0;
        numberUpdated(count);
    });

    socket.emit('numberUpdated', count);

});

function numberUpdated(number){
    io.emit('numberUpdated', number);
}
