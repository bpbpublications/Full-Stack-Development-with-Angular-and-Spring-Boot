import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ctr', 
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './ctr.component.html',
  styleUrls: ['./ctr.component.css']
})
export class CtrComponent {
  ctr :number=0;
  @Input()
  ctrApp: any;

  increment(){
    this.ctr++;
  }

}
