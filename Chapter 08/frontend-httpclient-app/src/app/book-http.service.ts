import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private booksUrl = 'api/books';  // URL to web api
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {

    return this.http.get('http://localhost:8081/'+this.booksUrl);
       
  }










}
