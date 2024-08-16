import { Injectable } from '@angular/core';
import { BookDB } from './DB_Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
    getAllBooks(){
      return BookDB;
    }
}
