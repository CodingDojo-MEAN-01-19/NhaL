const { bookController } = require('../controllers');
//without the index.js file you have to do as follow
//const bookController = require('../controllers/book.controller');

const router = require('express').Router();


module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .put('/:book_id', bookController.update)
  .get('/:book_id', bookController.show)
  .delete('/:book_id', bookController.destroy);
