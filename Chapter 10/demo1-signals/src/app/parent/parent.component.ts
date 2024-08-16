import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  appCtr={counter:0};
  appCtrSignal = signal({sCounter:0});

  incrementCtr(){
    this.appCtr.counter++;
    this.appCtrSignal.set({sCounter:this.appCtrSignal().sCounter+1})
  }


}
