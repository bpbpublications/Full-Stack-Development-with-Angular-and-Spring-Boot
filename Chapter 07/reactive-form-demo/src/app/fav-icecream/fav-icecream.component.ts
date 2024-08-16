import { Component } from '@angular/core';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-fav-icecream',
  templateUrl: './fav-icecream.component.html',
  styleUrls: ['./fav-icecream.component.css'],
  imports:[ReactiveFormsModule,CommonModule,]
})
export class FavIcecreamComponent {
  favouriteIcecream = new FormControl('');   

  
  updateValue(event:any){
    this.favouriteIcecream.setValue('Vanilla');
  }



}
