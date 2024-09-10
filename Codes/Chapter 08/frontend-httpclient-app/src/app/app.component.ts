import { Component } from '@angular/core';
import { Book } from './book';
import { BookHttpService } from './book-http.service';

@Component({
  selector: 'app-root',
  template: `Books:  <div *ngFor='let book of books'>  
  {{ book.id  }} </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-httpclient-app';
  books:Book[]=[];
  constructor(private bookService:BookHttpService){
     bookService.getBooks().subscribe((values)=>this.books=values);
  }




}
