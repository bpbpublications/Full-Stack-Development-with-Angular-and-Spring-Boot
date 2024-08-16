import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input()
  ctrApp: any;
}
