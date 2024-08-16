import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
    isOn:boolean = false;
    msg:string='';
    onClick(){
      this.isOn=!this.isOn;
      this.msg='Its On';
      
    } 
}
