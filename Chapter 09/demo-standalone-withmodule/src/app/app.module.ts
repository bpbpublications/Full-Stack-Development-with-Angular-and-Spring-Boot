import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { TraditionalComponent } from './traditional/traditional.component';
import { StandaloneComponent } from './standalone/standalone.component';
//import { StandaloneComponent } from './standalone/standalone.component';
//import { TraditionalComponent } from './traditional/traditional.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    StandaloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
