const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals',{
    useNewUrlParser: true,
});

mongoose.connection.on('connected', ()=> console.log('Mongo Connected'))