import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  template: `    
    <app-book-detail></app-book-detail>
   <app-book-list></app-book-list>
  
   `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backend-mock-dataservice';
  // books:Book[]=[];
  // selectBook:Book=new Book(0,'x','x');
  // bookCreated!: Book;
   constructor(private bookService:BooksService){
  //    bookService.getBooks().subscribe(val=>this.books=val)
     
  //    bookService.getBooksById(2).subscribe(val=>this.selectBook=val);
  //    bookService.createBook(new Book(4,'newB','newA')).subscribe((book)=>{this.bookCreated=book})

  // bookService.deleteBook(3).;
   
   };
  }



