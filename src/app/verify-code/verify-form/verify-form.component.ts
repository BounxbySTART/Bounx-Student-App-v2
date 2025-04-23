import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { VerificationService } from 'src/app/services/verification.service';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { IonText,IonButton, IonContent,IonIcon,IonInput } from '@ionic/angular/standalone';
import { SignUpSuccessFooterComponent } from "../../sign-up/sign-up-success-footer/sign-up-success-footer.component";

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
  imports: [IonContent, IonInput, IonText, IonButton, IonIcon, CommonModule, ReactiveFormsModule, MaskitoDirective, SignUpSuccessFooterComponent],
})
export class VerifyFormComponent implements OnInit {
  readonly otpMaskOptions: MaskitoOptions = {
    mask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
    /* postprocessors: [
      ({ value, selection }, initialElementState) => {
        console.log(value.replace(/\ /g, ''));

        if (value.length == 11 && /^[0-9]{6}$/.test(value.replace(/\ /g, ''))) {
          this.otpForm.get('otpInput')?.clearValidators();
          this.otpForm.get('otpInput')?.updateValueAndValidity();
        } else {
          this.otpForm
            .get('otpInput')
            ?.setValidators([
              Validators.required,
              Validators.pattern('^[0-9]{6}$'),
            ]);
          this.otpForm.get('otpInput')?.updateValueAndValidity();
        }

        return {
          value,
          selection,
        };
      },
    ], */
  };
  readonly maskPredicate: MaskitoElementPredicate = async (el) =>
    (el as HTMLIonInputElement).getInputElement();
  otpForm!: FormGroup;
  retryTimer: number = 40;
  timeInterval: any;
  authenticationError:any;

  constructor(
    public verificationService: VerificationService,
    private masterService: MasterService,
    private router: Router,
    private userService:UserService,
    private authService:AuthService
  ) {}

  ngOnInit() {
    console.log(this.verificationService.signUpUser);

    this.otpIntitiate();
    this.startTimer();
  }

  otpIntitiate() {
    this.otpForm = new FormGroup({
      otpInput: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9] [0-9] [0-9] [0-9] [0-9] [0-9]$'),
      ]),
    });
  }

  proceedToCreateUser() {
    if (!this.otpForm.valid) return false;
    console.log(this.verificationService.signUpUser);

    this.verificationService.signUpUser.OTP = this.otpForm.value.otpInput
      .toString()
      .replace(/\ /g, '');
    if (!this.verificationService.signUpUser.sid) return false;
    if (!this.verificationService.signUpUser.isPasswordReset) {
      this.masterService
        .createPlayerUser(this.verificationService.signUpUser)
        .subscribe((res: any) => {
          console.log(res);
          
            this.userService.setUser(res);
            this.authService.authToken = res.accessToken;
            this.authService.setRefreshToken(res.refreshToken);
            this.router.navigateByUrl('/app-sign-up-success');
        },(err)=>{
          this.authenticationError = err.error.message;
          
        });
    }
    if (this.verificationService.signUpUser.isPasswordReset) {
      this.masterService
        .verifyPasswordResetCode({
          ...this.verificationService.signUpUser,
          userType: 'STUDENT',
        })
        .subscribe((res: any) => {
          console.log(res);
          this.verificationService.signUpUser.passwordResetToken =
            res.passwordResetToken;
          this.router.navigateByUrl('/app-reset-pass-form-step2');
        },(err)=>{
          this.authenticationError = err.error.message;
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
          this.verificationService.signUpUser.sid = res.sid;
          this.startTimer();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
