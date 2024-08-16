import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  topRatedBooks!: Book[];
   constructor(private service:BookService){

   }
  ngOnInit(): void {
    this.topRatedBooks = this.service.getTopRatedBooks();
  } 
}
