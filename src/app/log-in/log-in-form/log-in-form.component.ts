import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonInputPasswordToggle,
  IonButton,
  ModalController,
  IonContent,
  IonText, IonIcon } from '@ionic/angular/standalone';
import { MasterService } from 'src/app/services/master.service';
import { LogInFooterComponent } from '../log-in-footer/log-in-footer.component';
import { CountryCodeComponent } from 'src/app/country-code/country-code.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DropdownButtonComponent } from 'src/app/general/dropdown-button/dropdown-button.component';
import { BounxLogoIconComponent } from 'src/app/general/bounx-logo-icon/bounx-logo-icon.component';
import {
  passwordHasAlphabetValidator,
  passwordHasNumericValidator,
  passwordMinlengthValidator,
} from 'src/app/validators/create-password-validator';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  imports: [IonIcon, 
    IonContent,
    IonLabel,
    IonInput,
    IonInputPasswordToggle,
    IonButton,
    ReactiveFormsModule,
    LogInFooterComponent,
    DropdownButtonComponent,
    BounxLogoIconComponent,
    MaskitoDirective,
    IonText,
  ],
})
export class LogInFormComponent implements OnInit {
  readonly phoneNumberMaskOptions: MaskitoOptions = {
    mask: /^\d{0,15}$/,
  };
  readonly maskPredicate: MaskitoElementPredicate = async (el) =>
    (el as HTMLIonInputElement).getInputElement();
  loginForm!: FormGroup;
  authenticationError:any;
  constructor(
    private masterService: MasterService,
    private modalCtrl: ModalController,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initiateLoginForm();
  }

  initiateLoginForm() {
    this.loginForm = new FormGroup({
      phoneCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        passwordHasAlphabetValidator(),
        passwordHasNumericValidator(),
        passwordMinlengthValidator(8),
      ]),
    });
  }
  userLogin() {
    let loginDetails = this.loginForm.value;
    this.masterService.login({ ...loginDetails, userType: 'STUDENT' }).subscribe(
      (res: any) => {
        if (res) {
          this.userService.setUser(res);
          this.authService.authToken = res.accessToken;
          this.authService.setRefreshToken(res.refreshToken);
          this.router.navigateByUrl('/tabs/tab1');
        }
      },
      (err) => {
        this.authenticationError = err.error;
        console.log(err.error.message);
      }
    );
  }

  async openModal(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();
    ev.stopPropagation();

    const modal = await this.modalCtrl.create({
      component: CountryCodeComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.75],
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    console.log(data, 'test');
    this.loginForm.patchValue({ phoneCode: data });
  }
  reDirectToResetPassword() {
    this.router.navigateByUrl('/app-reset-pass-form-step1');
  }
}
