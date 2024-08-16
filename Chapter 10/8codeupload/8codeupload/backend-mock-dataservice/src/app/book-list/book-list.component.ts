import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  standalone:true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports:[NgFor],
  providers:[],
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[]=[];
  constructor(private booksService:BooksService){
    
  }  
  ngOnInit(): void {
    this.booksService.getBooks().subscribe((vals)=>this.books=vals);
  }
}
