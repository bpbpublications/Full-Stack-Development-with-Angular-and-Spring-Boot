import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   allBooks!: Book[];
   constructor(private service:BookService){

   }
  ngOnInit(): void {
    this.allBooks = this.service.getAllBooks();
  } 

}
