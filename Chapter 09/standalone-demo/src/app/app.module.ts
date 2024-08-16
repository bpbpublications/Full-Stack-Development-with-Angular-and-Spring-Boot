import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
//import { ModulecompComponent } from './modulecomp/modulecomp.component';
@NgModule({
  declarations: [
    AppComponent,
    //ModulecompComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserComponent
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
