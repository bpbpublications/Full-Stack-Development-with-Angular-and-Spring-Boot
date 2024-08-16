import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childTitle:string ='Child Component';
  @Input()
  messageFromParent!: string;
  @Output()
  messageToParent:EventEmitter<string>= new EventEmitter<string>();



  sendResponse(){
 
          this.messageToParent.emit("I am fine");
               
  }



}
