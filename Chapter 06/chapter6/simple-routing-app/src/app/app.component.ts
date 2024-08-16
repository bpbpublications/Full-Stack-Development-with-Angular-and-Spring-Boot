import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<h3>App Component works</h3>
  
  <nav>
  <ul>
    <li><a routerLink="/home">Home Component</a></li>
    <li><a routerLink="/about">About Component</a></li>
    <li><a routerLink="/contact">Contact Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
  
  <router-outlet></router-outlet>
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-routing-app';
}
