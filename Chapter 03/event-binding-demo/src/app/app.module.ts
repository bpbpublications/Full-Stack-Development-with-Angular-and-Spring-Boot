import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleEffectComponent } from './toggle-effect/toggle-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleEffectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
