import { Injectable } from '@angular/core';
import { SignUpUser } from 'src/types/sign-up-user';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  signUpUser!: SignUpUser;
  constructor() {
    console.log(`verification service created`);
    
  }
}
