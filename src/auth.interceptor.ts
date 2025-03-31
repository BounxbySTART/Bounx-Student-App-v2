import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from './app/services/auth.service';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authService = inject(AuthService);
  const authToken = authService.authToken;
  const refreshToken = authService.refreshToken;
  // Clone the request to add the authentication header.

  if (authToken) {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${authToken}`),
    });
    return next(newReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log(req.url, 'returned a response with status', event.status);
          console.log(event);
        }
      }),
      catchError((err, caught) => {
        console.log(`http error`, err);

        if (err.status == 403) {
          console.log('invalid token');
          return authService.refreshAuthToken().pipe(
            switchMap((newToken: { accessToken: string }) => {
              // Retry the failed request with the new token
              authService.authToken = newToken.accessToken;
              const newAuthReq = req.clone({
                setHeaders: { Authorization: `Bearer ${newToken.accessToken}` },
              });
              return next(newAuthReq);
            })
          );
        }
        return throwError(err);
      })
    );
  }
  return next(req).pipe(
    catchError((err, caught) => {
      if (err.status === 401) {
        if (!refreshToken) authService.logout();
        if (refreshToken) {
          console.log(`renewing auth token`);
          return authService.refreshAuthToken().pipe(
            switchMap((newToken: { accessToken: string }) => {
              // Retry the failed request with the new token
              authService.authToken = newToken.accessToken;
              const newAuthReq = req.clone({
                setHeaders: { Authorization: `Bearer ${newToken.accessToken}` },
              });
              return next(newAuthReq);
            })
          );
        }
      }
      if (err.status === 424) authService.logout();
      return throwError(err);
    })
  );
}
