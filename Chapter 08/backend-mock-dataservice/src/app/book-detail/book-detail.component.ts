import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
   bid!: number;
   book!: Book;
   errorMsg: string='';
  constructor(private booksService:BooksService){
    
  } 
  ngOnInit(): void {
   // this.booksService.getBooksById(this.bid).subscribe({next:(val)=>console.log(val),error:(error)=>console.error(error)});
  }

  handleChange(event:any){
    this.bid = event.target.value;
    this.booksService.getBooksById(this.bid).
    subscribe(
      {next:(book)=>{this.book=book},
      error:(error)=>{
        console.error(error); 
         this.errorMsg ="No book with this id found"
      }
    
    });
    this.errorMsg='';
    
  }

}
