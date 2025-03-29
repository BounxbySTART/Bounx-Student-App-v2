import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonIcon,
  ModalController,
  IonContent,
  IonLabel,
  IonButton,
  IonInput,
} from '@ionic/angular/standalone';
import { CountryCodeComponent } from 'src/app/country-code/country-code.component';
import { DropdownButtonComponent } from 'src/app/general/dropdown-button/dropdown-button.component';
import { ResetPassFooterComponent } from '../reset-pass-footer/reset-pass-footer.component';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-reset-pass-form-step1',
  templateUrl: './reset-pass-form-step1.component.html',
  styleUrls: ['./reset-pass-form-step1.component.scss'],
  imports: [
    IonInput,
    IonButton,
    IonLabel,
    IonContent,
    IonIcon,
    DropdownButtonComponent,
    ResetPassFooterComponent,
    ReactiveFormsModule,
  ],
})
export class ResetPassFormStep1Component implements OnInit {
  resetPasswordForm!: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private masterService: MasterService,
    private verficationService: VerificationService
  ) {}

  ngOnInit() {
    this.initResetPassword();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CountryCodeComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.75],
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    console.log(data, 'test');
    this.resetPasswordForm.patchValue({ phoneCode: data });
  }
  initResetPassword() {
    this.resetPasswordForm = new FormGroup({
      phoneCode: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      userType: new FormControl('PLAYER'),
    });
  }
  generateCode() {
    let codeInitObj = this.resetPasswordForm.value;
    this.masterService
      .generatePasswordResetCode(codeInitObj)
      .subscribe((res: any) => {
        this.verficationService.signUpUser = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phone: '',
          phoneCode: '',
          isTermsAgreed: true,
          isPasswordReset: true,
          sId: res.sId,
        };
      });
    this.router.navigateByUrl('/app-verify-form');
  }
}
