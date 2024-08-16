import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionalComponent } from '../traditional/traditional.component';



@NgModule({
  declarations: [TraditionalComponent],
  imports: [
    CommonModule
  ],
  exports:[TraditionalComponent],
})
export class MymoduleModule { }
