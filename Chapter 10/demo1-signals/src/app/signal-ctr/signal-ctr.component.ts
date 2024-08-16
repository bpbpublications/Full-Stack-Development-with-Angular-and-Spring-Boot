import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ctr',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './signal-ctr.component.html',
  styleUrls: ['./signal-ctr.component.css']
})
export class SignalCtrComponent {
     ctr=signal(0);
     @Input()
     parentCtr: any;

     increment(){
      this.ctr.set(this.ctr()+1)
     }
}
