import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
} from '@angular/router';
import {
  provideIonicAngular,
  IonicRouteStrategy,
} from '@ionic/angular/standalone';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig =
  // { providers: [provideHttpClient(), { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, importProvidersFrom(IonicModule.forRoot({})), provideRouter(routes)] };

  {
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules)),
      provideHttpClient(),
    ],
  };
