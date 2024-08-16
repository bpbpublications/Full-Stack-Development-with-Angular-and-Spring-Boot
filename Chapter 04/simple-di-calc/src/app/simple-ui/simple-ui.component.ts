import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
@Component({
  selector: 'app-simple-ui',
  templateUrl: './simple-ui.component.html',
  styleUrls: ['./simple-ui.component.css']
})
export class SimpleUiComponent {
   ans:number= 0;

   constructor(private calculatorService:CalculatorService){
         
   }

   getSqrRoot(val:string){
     this.ans = this.calculatorService.findSqrRoot(parseInt(val));
   } 

}
