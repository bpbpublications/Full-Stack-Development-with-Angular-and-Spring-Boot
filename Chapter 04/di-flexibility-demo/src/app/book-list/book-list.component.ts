import { Component } from '@angular/core';
import { Book, BookDB } from '../DB_Book';
import { BookService } from '../book.service';
import { FastBookService } from '../fast-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
 
  providers:[FastBookService]
})
export class BookListComponent {
   books: Book[] = [];
   constructor(private bookService:FastBookService){
           
   }
   ngOnInit(){
     this.books = this.bookService.getAllBooks();
   }
   
}
