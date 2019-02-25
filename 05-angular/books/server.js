const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
//app.set('port', process.env.PORT || 8000);

require('./server/config/database');

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static('dist/public'));
app.use(require('./server/routes'));

//app.listen(port, () => console.log('express is listening on part ${port}'));
app.listen(8000,() => console.log('express is listening on part ' + port));
