import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormattedDtComponent } from './formatted-dt/formatted-dt.component';

@NgModule({
  declarations: [
    AppComponent,
    FormattedDtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
