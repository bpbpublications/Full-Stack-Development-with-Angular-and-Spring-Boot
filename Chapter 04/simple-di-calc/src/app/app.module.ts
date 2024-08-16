import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleUiComponent } from './simple-ui/simple-ui.component';
import { FastBookComponent } from './fast-book/fast-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleUiComponent,
    FastBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
