import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  
})
export class ParentComponent {
  title:string="Parent Component"
  messageToChild:string ="how are you?"
  messageFromChild!: string;
  getMessage( msg: string){
      this.messageFromChild = msg;
  } 

}
