import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  ModalController,
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
} from '@ionic/angular/standalone';
import { MasterService } from 'src/app/services/master.service';
import { VerificationService } from 'src/app/services/verification.service';
import {
  passwordHasAlphabetValidator,
  passwordHasNumericValidator,
  passwordMinlengthValidator,
} from 'src/app/validators/create-password-validator';
import { ResetPassFooterComponent } from "../reset-pass-footer/reset-pass-footer.component";

@Component({
  selector: 'app-reset-pass-form-step2',
  templateUrl: './reset-pass-form-step2.component.html',
  styleUrls: ['./reset-pass-form-step2.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonContent,
    ReactiveFormsModule,
    IonInput,
    IonInputPasswordToggle,
    NgClass,
    ResetPassFooterComponent
],
})
export class ResetPassFormStep2Component implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private masterService: MasterService,
    private verificationService: VerificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        passwordHasAlphabetValidator(),
        passwordHasNumericValidator(),
        passwordMinlengthValidator(8),
      ]),
    });
  }

  proceedToSave() {
    if (
      !this.verificationService.signUpUser.sid ||
      !this.verificationService.signUpUser.passwordResetToken
    )
      return;
    this.masterService
      .resetPlayerUserPassword({
        sid: this.verificationService.signUpUser.sid,
        passwordResetToken:
          this.verificationService.signUpUser.passwordResetToken,
        newPassword: this.resetPasswordForm.value.password,
      })
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/app-reset-pass-success');
        },
        (err) => {}
      );
  }
}
