import { provideHttpClient, withInterceptors } from '@angular/common/http';
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
import { authInterceptor } from 'src/auth.interceptor';

export const appConfig: ApplicationConfig =
  // { providers: [provideHttpClient(), { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, importProvidersFrom(IonicModule.forRoot({})), provideRouter(routes)] };

  {
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules)),
      provideHttpClient(withInterceptors([authInterceptor])),
    ],
  };
