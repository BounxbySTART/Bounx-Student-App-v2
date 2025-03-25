import { HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from './app/services/user.service';
import { tap } from 'rxjs/operators';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(UserService).user.accessToken;
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
      })
    );
  }
  return next(req);
}
