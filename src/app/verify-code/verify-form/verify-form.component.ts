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
import { VerificationService } from 'src/app/services/verification.service';
import { SignUpUser } from 'src/types/sign-up-user';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class VerifyFormComponent implements OnInit {
  otpForm!: FormGroup;
  retryTimer: number = 40;
  timeInterval: any;

  constructor(
    private verificationService: VerificationService,
    private masterService: MasterService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.verificationService.signUpUser);

    this.otpIntitiate();
    this.startTimer();
  }

  otpIntitiate() {
    this.otpForm = new FormGroup({
      otpInput: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{6}$')]),
    });
  }

  proceedToCreateUser() {
    if (!this.otpForm.valid) return false;
    console.log(this.verificationService.signUpUser);

    this.verificationService.signUpUser.OTP =
      this.otpForm.value.otpInput.toString();
    if (!this.verificationService.signUpUser.sId) return false;
    if (!this.verificationService.signUpUser.isPasswordReset) {
      this.masterService
        .createPlayerUser(this.verificationService.signUpUser)
        .subscribe((res: any) => {
          console.log(res);
          this.router.navigateByUrl('/app-sign-up-success');
        });
    }
    if (this.verificationService.signUpUser.isPasswordReset) {
      this.masterService
        .verifyPasswordResetCode({
          ...this.verificationService.signUpUser,
          userType: 'PLAYER',
        })
        .subscribe((res:any) => {
          console.log(res);
          this.verificationService.signUpUser.passwordResetToken = res.passwordResetToken;
          this.router.navigateByUrl('/app-reset-pass-form-step2');
        });
    }
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

    this.masterService
      .verifyPlayerUser(this.verificationService.signUpUser)
      .subscribe(
        (res: any) => {
          this.verificationService.signUpUser.sId = res.sId;
          this.startTimer();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
