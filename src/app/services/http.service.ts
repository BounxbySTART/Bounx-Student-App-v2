import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string) {
    return this.http.get<T>(url);
  }
  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body);
  }
  patch<T>(url: string, body: any) {
    return this.http.patch<T>(url, body);
  }
  put<T>(url: string, body: any) {
    return this.http.put<T>(url, body);
  }
  delete<T>(url: string) {
    return this.http.delete<T>(url);
  }
}
