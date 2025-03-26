import { Injectable } from '@angular/core';
export interface SignUpUser{
    firstName: string;
    lastName: string;
    phoneCode:string;
    phone: string;
    email:string;
    deviceId?:string;
    pushTaken?:string;
    password:string;
    isTermsAgreed:boolean;
    sId?:string;
    OTP?:string;
}



@Injectable({
  providedIn: 'root',
})
export class VerificationService {
    signUpUser!:SignUpUser;
  constructor() {}


}
