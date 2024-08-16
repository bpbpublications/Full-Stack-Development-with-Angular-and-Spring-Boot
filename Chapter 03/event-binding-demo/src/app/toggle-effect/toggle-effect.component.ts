import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-effect',
  templateUrl: './toggle-effect.component.html',
  styleUrls: ['./toggle-effect.component.css']
})
export class ToggleEffectComponent {
  isOn:boolean=true;
  

  doToggle(){

    this.isOn = !this.isOn;

  }


}
