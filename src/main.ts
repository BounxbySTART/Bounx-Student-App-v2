import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
bootstrapApplication(AppComponent,appConfig)