import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxCustomEvent, ModalController } from '@ionic/angular';
import {
  IonIcon,
  IonInput,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/angular/standalone';
import { checkbox } from 'ionicons/icons';
import { CountryCodeComponent } from 'src/app/country-code/country-code.component';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { MasterService } from 'src/app/services/master.service';
import { User, UserService } from 'src/app/services/user.service';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Component({
  selector: 'app-onboarding-step1',
  templateUrl: './onboarding-step1.component.html',
  styleUrls: ['./onboarding-step1.component.scss'],
  imports: [
    IonIcon,
    IonInput,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonButton,
    StepProgressComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class OnboardingStep1Component implements OnInit {
  playerProfileFormGroup!: FormGroup;
  getUser!: User;
  checkBox: boolean = true;

  constructor(
    private masterService: MasterService,
    private modalCtrl: ModalController,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.getUser = this.userService.user;
    this.playerProfileFormGroup.patchValue({
      emergencyName: this.getUser.firstName,
    });
    this.playerProfileFormGroup.patchValue({
      phoneCode: this.getUser.phoneCode,
    });
    this.playerProfileFormGroup.patchValue({
      emergencyPhone: this.getUser.phone,
    });
  }

  initForm() {
    this.playerProfileFormGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[ -~]{2,}$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[ -~]{2,}$/),
      ]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      isEmergencyContactPrimaryAccount: new FormControl(true),
      emergencyName: new FormControl('', Validators.required),
      emergencyRelationship: new FormControl(
        'Account Owner',
        Validators.required
      ),
      phoneCode: new FormControl('',Validators.required),
      emergencyPhone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }

  getPlayerProfileDetail() {
    console.log('hello');
    let collectedData = this.playerProfileFormGroup.value;
    this.masterService
      .playerProfileDetail(collectedData)
      .subscribe((res: PlayerProfileRequest) => {
        if (res) {
          this.router.navigateByUrl('/onboarding-step2');
        }
        console.log(res);
      });
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
    this.playerProfileFormGroup.patchValue({ phoneCode: data });
  }

  checkBoxValue(ev: CheckboxCustomEvent) {
    this.checkBox = ev.detail.checked;
    if (this.checkBox == false) {
      this.playerProfileFormGroup.get('emergencyName')?.reset();
      this.playerProfileFormGroup.get('emergencyRelationship')?.reset();
      this.playerProfileFormGroup.get('phoneCode')?.reset();
      this.playerProfileFormGroup.get('emergencyPhone')?.reset();
    } else {
      this.playerProfileFormGroup.patchValue({
        emergencyName: this.getUser.firstName,
      });
      this.playerProfileFormGroup.patchValue({
        emergencyRelationship: 'Account Owner'
      });
      this.playerProfileFormGroup.patchValue({
        phoneCode: this.getUser.phoneCode,
      });
      this.playerProfileFormGroup.patchValue({
        emergencyPhone: this.getUser.phone,
      });
    }
  }
}
