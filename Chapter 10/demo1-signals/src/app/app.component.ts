import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1-signals';
  appCtr={counter:0};
  appCtrSignal = signal({sCounter:0});

  incrementCtr(){
    this.appCtr.counter++;
    this.appCtrSignal.set({sCounter:this.appCtrSignal().sCounter+1})
  }



}
