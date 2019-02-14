var mongoose = require('mongoose');
var { Schema } = mongoose;

var QuoteSchema = new Schema({
    name:  { type: String, required: true, minlength: 3},
    quote: { type: String, required: true, minlength: 3 },
    date: { type: Date, default: Date.now}
}, {timestamps: true });
mongoose.model('NewQuote', QuoteSchema)
mongoose.Promise = global.Promise;
var Quote = mongoose.model('NewQuote');

module.exports = { Quote }