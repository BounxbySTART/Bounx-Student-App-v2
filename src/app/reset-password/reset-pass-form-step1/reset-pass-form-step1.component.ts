import { CommonModule, Location } from '@angular/common';
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
  IonText
} from '@ionic/angular/standalone';
import { CountryCodeComponent } from 'src/app/country-code/country-code.component';
import { DropdownButtonComponent } from 'src/app/general/dropdown-button/dropdown-button.component';
import { ResetPassFooterComponent } from '../reset-pass-footer/reset-pass-footer.component';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { VerificationService } from 'src/app/services/verification.service';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';


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
    IonText,
    DropdownButtonComponent,
    ResetPassFooterComponent,
    ReactiveFormsModule,
    MaskitoDirective,
  ],
})
export class ResetPassFormStep1Component implements OnInit {
  readonly phoneNumberMaskOptions: MaskitoOptions = {
    mask: /^\d{0,15}$/,
  };
  readonly maskPredicate: MaskitoElementPredicate = async (el) =>
    (el as HTMLIonInputElement).getInputElement();
  resetPasswordForm!: FormGroup;
  authenticationError:any;
  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private masterService: MasterService,
    private verficationService: VerificationService,
    private location:Location
  ) {}

  ngOnInit() {
    this.initResetPassword();
  }

  async openModal(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();
    ev.stopPropagation();

    const modal = await this.modalCtrl.create({
      component: CountryCodeComponent,
      initialBreakpoint: 0.45,
      breakpoints: [0, 0.45, 0.75],
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    console.log(data, 'test');
    this.resetPasswordForm.patchValue({ phoneCode: data });
  }
  initResetPassword() {
    this.resetPasswordForm = new FormGroup({
      phoneCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      userType: new FormControl('STUDENT'),
    });
  }
  generateCode() {
    let codeInitObj = this.resetPasswordForm.value;
    this.masterService
      .generatePasswordResetCode(codeInitObj)
      .subscribe((res: any) => {
        this.verficationService.signUpUser = {
          firstName: 'reset',
          lastName: 'reset',
          email: 'reset@email',
          password: 'password',
          phone: codeInitObj.phone,
          phoneCode: codeInitObj.phoneCode,
          isTermsAgreed: true,
          isPasswordReset: true,
          sid: res.sid,
        };
        this.router.navigateByUrl('/app-verify-form');
      },(err:any)=>{
        this.authenticationError = err.error.message;
        console.log(err);
        
      });
  }
  goToPreviousPage(){
    this.location.back();
  }
}
