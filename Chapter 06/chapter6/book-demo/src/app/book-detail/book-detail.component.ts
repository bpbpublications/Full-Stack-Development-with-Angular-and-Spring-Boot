import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  selectedBook :Book | undefined
  bookId:number=0; 
  constructor(private route:ActivatedRoute,private service:BookService){}
  ngOnInit(): void {
    this.route.params.subscribe((params=>{this.bookId=params['id']}))
    this.selectedBook = this.service.getBookById(this.bookId);
  }
}
