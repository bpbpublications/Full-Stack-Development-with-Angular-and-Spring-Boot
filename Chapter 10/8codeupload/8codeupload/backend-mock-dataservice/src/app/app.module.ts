import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import {  HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';

import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    
    BookDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,BookListComponent,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
