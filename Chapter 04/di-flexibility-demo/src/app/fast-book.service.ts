import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { BookDB } from './DB_Book';

@Injectable()
export class FastBookService extends BookService {

  constructor() {
    super();
  }
   override getAllBooks(){
    
    console.log("better performance")
    return BookDB;
  }
}
