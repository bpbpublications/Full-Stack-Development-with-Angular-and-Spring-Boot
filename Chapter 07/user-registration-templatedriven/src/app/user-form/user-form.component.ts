import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone:true,
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports:[BrowserModule,FormsModule]
})
export class UserFormComponent {
   name:string=""
   city:string=""
   address:string=""
}
