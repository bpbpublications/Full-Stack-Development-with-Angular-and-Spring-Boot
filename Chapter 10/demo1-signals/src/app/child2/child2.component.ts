import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Input()
  parentCtr: any;
}
