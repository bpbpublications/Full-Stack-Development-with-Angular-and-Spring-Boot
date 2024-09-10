import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<body><div><h2>Simple App Demo</h2>
  <p>This is App Component</p>
  <app-hello-world></app-hello-world>
  <app-prop-bind-demo ></app-prop-bind-demo></div></body>`,
  styles: ['h1 { font-weight: italic; }','div {background-color:powderblue;}']
})
export class AppComponent {
  title = 'simple-app';
}
