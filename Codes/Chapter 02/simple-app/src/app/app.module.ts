import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PropBindDemoComponent } from './prop-bind-demo/prop-bind-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PropBindDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
