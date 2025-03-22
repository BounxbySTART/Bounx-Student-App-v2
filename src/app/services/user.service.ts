import { Injectable } from '@angular/core';

export interface User {
  accessToken: string;
  firstName: string;
  lastName: string;
  phoneCode:string;
  phone: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  constructor() {
    const userVal = localStorage.getItem('user');
    if (userVal) {
      this.user = JSON.parse(userVal);
    }
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
}
