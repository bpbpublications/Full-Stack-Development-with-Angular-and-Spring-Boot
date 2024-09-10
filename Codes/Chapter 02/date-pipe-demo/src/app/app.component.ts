import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3>App Component</h3>
     <app-formatted-dt></app-formatted-dt>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-pipe-demo';
}
