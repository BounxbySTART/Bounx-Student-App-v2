import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { UserService } from "./app/services/user.service";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    // Inject the current `AuthService` and use it to get an authentication token:
    const authToken = inject(UserService).user.accessToken;
    // Clone the request to add the authentication header.
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${authToken}`),
    });
    return next(newReq);
  }