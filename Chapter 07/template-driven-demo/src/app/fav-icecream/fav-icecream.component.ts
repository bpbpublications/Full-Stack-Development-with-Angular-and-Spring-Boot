import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-fav-icecream',
  template:`
  Favorite Icecream: <input type="text" [(ngModel)]="favoriteIcecream" />
`,
  styleUrls: ['./fav-icecream.component.css'],
  imports:[FormsModule]

})
export class FavIcecreamComponent {

  favoriteIcecream = '';

}
