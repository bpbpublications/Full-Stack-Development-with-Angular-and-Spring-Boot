import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,FormDynamicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
