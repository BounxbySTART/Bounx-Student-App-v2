import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { RouteReuseStrategy, provideRouter } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = { providers: [provideHttpClient(), { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, importProvidersFrom(IonicModule.forRoot({})), provideRouter(routes)] };