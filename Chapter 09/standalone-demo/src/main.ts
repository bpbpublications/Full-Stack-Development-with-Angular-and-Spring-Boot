import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserComponent } from './app/user/user.component';
import { AppComponent } from './app/app.component';
//import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';


platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
 
//bootstrapApplication(AppComponent,{
 // providers:[
  //  {
  //    provide:environment.BACLEND_URL,
 //   },
 //   importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
//  ]
//})

