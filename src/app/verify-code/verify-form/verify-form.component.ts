import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';
import { MasterService } from 'src/app/services/master.service';
import { SignUpUser, VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
  imports: [
    IonicModule,CommonModule,ReactiveFormsModule
  ],
})
export class VerifyFormComponent implements OnInit {
  signUpUser!:SignUpUser;
  otpForm!: FormGroup;

  constructor(private verificationService:VerificationService,private masterService: MasterService, private router:Router) { }

  ngOnInit() {
    this.signUpUser= this.verificationService.signUpUser;
    this.otpIntitiate();
  }

otpIntitiate(){
this.otpForm = new FormGroup({
  otpInput: new FormControl('',[Validators.required])
})

}

proceedToCreateUser() {
  if(!this.otpForm.valid) return false;

 this.signUpUser.OTP = this.otpForm.value.otpInput;
 if(!this.signUpUser.sId) return false;
 this.masterService.createPlayerUser(this.signUpUser).subscribe((res:any)=>{
  console.log(res);
  this.router.navigateByUrl('/app-sign-up-success');
})
return true
}


}
