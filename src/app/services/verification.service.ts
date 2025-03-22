import { Injectable } from '@angular/core';
export interface SignUpUser{
    firstName: string;
    lastName: string;
    phoneCode:string;
    phone: string;
    password:string;
    isTermsAgreed:boolean;

}

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
    signUpUser!:SignUpUser;
  constructor() {}


}
