import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  findSqrRoot(num:number){
       return Math.sqrt(num);
  }
}
