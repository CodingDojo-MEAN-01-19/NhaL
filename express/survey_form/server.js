//load the express module
//load the path module
//load the body-parser
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//we use index.js to setup all routes instead of direct routing in server.js
require('./routes/index.js')(app);
// setting server to run on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000!");
});