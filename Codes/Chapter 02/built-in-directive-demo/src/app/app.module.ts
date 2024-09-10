import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { StrctDirComponent } from './strct-dir/strct-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirComponent,
    StrctDirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
