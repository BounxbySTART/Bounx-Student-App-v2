import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: string | undefined = undefined;
  refreshToken!: string;
  constructor(private http: HttpService, private router: Router) {
    const rToken = localStorage.getItem('refreshToken');
    if (rToken) this.setRefreshToken(rToken);
  }

  setRefreshToken(token: string) {
    if (token) {
      localStorage.setItem('refreshToken', token);
      this.refreshToken = token;
    }
  }

  refreshAuthToken(): Observable<{ accessToken: string }> {
    this.authToken = undefined;
    // Call your API to refresh the token
    return this.http.post<{ accessToken: string }>(
      `${environment.masterUrl}auth/refresh-token`,
      { refreshToken: this.refreshToken }
    );
  }
  logout() {
    localStorage.removeItem('refreshToken');
    this.router.navigateByUrl('/log-in');
  }
}
