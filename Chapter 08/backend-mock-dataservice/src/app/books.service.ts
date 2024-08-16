import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private booksUrl = 'api/books';  // URL to web api
  constructor(private http: HttpClient) { }


  getBooks(): Observable<any> {
    
    return this.http.get(this.booksUrl);
       
  }

  getBooksById(id:number):Observable<any>{
    const url = `${this.booksUrl}/${id}`;
    return this.http.get(url);
  }

  getBooksByIdRevised(id:number):Observable<any>{
    const url = `${this.booksUrl}/${id}`;
    return this.http.get("/books");
  }

  createBook(book:Book):Observable<any>{
    
    return this.http.post(this.booksUrl,book);
    
  }

  updateBook(id:number,updatedBook:Book){

    const url = `${this.booksUrl}/${id}`;
    return this.http.put(url,updatedBook);

  }


  deleteBook(id:number):Observable<any>{
    console.log('here'+id);
    const url = `${this.booksUrl}/${id}`;
  return   this.http.delete(url);
      
  }




}
