const mongoose = require('mongoose');

const { Schema } = mongoose;

/* export class Book {
  title: string;
  author: string;
  year: number;
  pages: number;
  publisher: string;
} */

const BookSchema = new Schema({
  title: String,
  author: String,
  publisher: String,
  year: Number,
  pages: Number
});

module.exports = mongoose.model('Book', BookSchema)

