import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<body><h3>App Component</h3>
                 <app-attribute-dir></app-attribute-dir>
                 <app-strct-dir></app-strct-dir></body>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'built-in-directive-demo';
}
