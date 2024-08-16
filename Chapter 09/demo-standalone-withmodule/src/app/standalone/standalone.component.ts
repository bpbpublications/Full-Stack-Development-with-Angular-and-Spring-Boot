import { Component } from '@angular/core';
import { MymoduleModule } from '../mymodule/mymodule.module';

@Component({
  standalone:true,
  selector: 'app-standalone',  
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css'],
  imports:[MymoduleModule]
})
export class StandaloneComponent {

}
