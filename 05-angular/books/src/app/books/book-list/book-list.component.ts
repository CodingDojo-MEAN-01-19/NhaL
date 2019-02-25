import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';
import { BOOKS } from '../../data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor() { }

  ngOnInit() {
  }

  onCreate(event: Book) {
    console.log('creating', event);
    this.books.push(event);
  }

  onSelect(book: Book){
    console.log('selecting', book);

    this.selectedBook = (this.selectedBook === book) ? null : book;
/*
    if (this.selectedBook === book) {
      this.selectedBook = null;
    } else {
      this.selectedBook = book;
    } */
  }

}
