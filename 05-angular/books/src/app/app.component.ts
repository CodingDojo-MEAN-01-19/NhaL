import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  book = new Book();
  books: Book[] = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submiting form', this.book);
    this.books.push(this.book);
    this.book = new Book();
    console.log('book ', this.books);



    form.reset();

  }
}
