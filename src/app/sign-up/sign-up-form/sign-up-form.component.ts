import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonCheckbox,
  IonInput,
  IonInputPasswordToggle,
  IonIcon,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonContent,
} from '@ionic/angular/standalone';
import { MasterService } from 'src/app/services/master.service';
import { CountryCodeComponent } from '../../country-code/country-code.component';
import { ModalController } from '@ionic/angular';
import {
  passwordHasAlphabetValidator,
  passwordHasNumericValidator,
  passwordMinlengthValidator,
} from 'src/app/validators/create-password-validator';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/services/verification.service';
import { DropdownButtonComponent } from 'src/app/general/dropdown-button/dropdown-button.component';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  imports: [
    IonContent,
    NgClass,
    ReactiveFormsModule,
    DropdownButtonComponent,
    IonCheckbox,
    IonInput,
    IonInputPasswordToggle,
    IonIcon,
    IonLabel,
    IonButton,
    MaskitoDirective,
  ],
  providers: [MasterService],
})
export class SignUpFormComponent implements OnInit {
  readonly phoneNumberMaskOptions: MaskitoOptions = {
    mask: /^\d{0,11}$/,
  };
  readonly maskPredicate: MaskitoElementPredicate = async (el) =>
    (el as HTMLIonInputElement).getInputElement();

  signUpFormGroup!: FormGroup;

  constructor(
    private masterService: MasterService,
    private modalCtrl: ModalController,
    private router: Router,
    private verficationService: VerificationService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpFormGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[ -~]{2,}$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[ -~]{2,}$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$'
        ),
        passwordHasAlphabetValidator(),
        passwordHasNumericValidator(),
        passwordMinlengthValidator(8),
      ]),
      phoneCode: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      isTermsAgreed: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  verify() {
    let collectedData = this.signUpFormGroup.value;

    this.masterService.verifyPlayerUser(collectedData).subscribe((res: any) => {
      this.verficationService.signUpUser = collectedData;
      this.verficationService.signUpUser.sId = res.sId;
      this.verficationService.signUpUser.isPasswordReset = false;

      this.router.navigateByUrl('/app-verify-form');
    });
  }

  async openModal(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();
    ev.stopPropagation();

    const modal = await this.modalCtrl.create({
      component: CountryCodeComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 0.75],
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    console.log(data, 'test');
    this.signUpFormGroup.patchValue({ phoneCode: data });
  }
}
