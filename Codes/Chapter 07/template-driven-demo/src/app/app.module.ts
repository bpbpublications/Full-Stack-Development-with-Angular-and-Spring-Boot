import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavIcecreamComponent } from './fav-icecream/fav-icecream.component';

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavIcecreamComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
