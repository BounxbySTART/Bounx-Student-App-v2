import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import {
  SignUpUser,
  VerificationService,
} from 'src/app/services/verification.service';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class VerifyFormComponent implements OnInit {
  signUpUser!: SignUpUser;
  otpForm!: FormGroup;
  retryTimer: number = 40;
  timeInterval: any;

  constructor(
    private verificationService: VerificationService,
    private masterService: MasterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpUser = this.verificationService.signUpUser;
    this.otpIntitiate();
    this.startTimer();
  }

  otpIntitiate() {
    this.otpForm = new FormGroup({
      otpInput: new FormControl('', [Validators.required]),
    });
  }

  proceedToCreateUser() {
    if (!this.otpForm.valid) return false;
    console.log(this.signUpUser);

    this.signUpUser.OTP = this.otpForm.value.otpInput.toString();
    if (!this.signUpUser.sId) return false;
    this.masterService
      .createPlayerUser(this.signUpUser)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/app-sign-up-success');
      });
    return true;
  }

  startTimer() {
    if (this.timeInterval) clearInterval(this.timeInterval);
    this.retryTimer = 40;
    this.timeInterval = setInterval(() => {
      this.retryTimer--;
      if (this.retryTimer <= 0) {
        clearInterval(this.timeInterval);
      }
    }, 1000);
  }

  resendOtp() {
    this.otpForm.reset();
    // this.signUpUser.OTP = undefined;

    this.masterService.verifyPlayerUser(this.signUpUser).subscribe(
      (res:any) => {
        this.signUpUser.sId = res.sId;
        this.startTimer();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
