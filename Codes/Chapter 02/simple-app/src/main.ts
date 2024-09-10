import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ApplicationRef } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';


platformBrowserDynamic().bootstrapModule(AppModule).then(moduleRef => {
  const applicationRef = moduleRef.injector.get(ApplicationRef);
  const componentRef = applicationRef.components[0];
  enableDebugTools(componentRef);
})
  .catch(err => console.error(err));
