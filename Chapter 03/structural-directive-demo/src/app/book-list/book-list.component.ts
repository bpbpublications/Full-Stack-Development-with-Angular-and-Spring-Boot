import { Component } from '@angular/core';
import { Book, books } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books:Book[]= books;

}
