import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { ModulecompComponent } from '../modulecomp/modulecomp.component';
//import { AppModule } from '../app.module';

@Component({
  standalone: true,
  selector: 'app-user',
  imports:[RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}
