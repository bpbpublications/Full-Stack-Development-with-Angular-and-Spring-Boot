import { Injectable } from '@angular/core';
import { Book } from "./book";
import { BOOKDB } from './bookDB';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:Book[]= BOOKDB;
  constructor() { }
  getAllBooks(){
    return this.books;
  }
  
  getTopRatedBooks(){
    return this.books.filter(book=>book.rating>3);
  }

  getBookById(id:number){
    return this.books.find((book=>book.id==id));
  }

}
