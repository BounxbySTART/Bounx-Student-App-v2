import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import { CountryCodeComponent } from '../../country-code/country-code.component';
import { ModalController } from '@ionic/angular';
import { createPasswordStrengthValidator, passwordHasAlphabetValidator, passwordHasNumericValidator } from 'src/app/validators/create-password-validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    /*
    IonCheckbox,
    IonInput,
    IonInputPasswordToggle,
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton */
  ],
  providers: [MasterService],
})
export class SignUpFormComponent implements OnInit {
  signUpFormGroup!: FormGroup;

  constructor(
    private masterService: MasterService,
    private modalCtrl: ModalController
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
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$'
        ),
        passwordHasAlphabetValidator(),
        passwordHasNumericValidator()
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
    this.masterService
      .createPlayerUser(collectedData)
      .subscribe((res: any) => {});
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
    this.signUpFormGroup.patchValue({ phoneCode: data });
  }


}
