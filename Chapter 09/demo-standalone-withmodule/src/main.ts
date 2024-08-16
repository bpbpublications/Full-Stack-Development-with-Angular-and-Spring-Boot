//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
//import { StandaloneComponent } from './app/standalone/standalone.component';
import { BootstrapStandaloneComponent } from './app/bootstrap-standalone/bootstrap-standalone.component';


//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));
bootstrapApplication(BootstrapStandaloneComponent);
