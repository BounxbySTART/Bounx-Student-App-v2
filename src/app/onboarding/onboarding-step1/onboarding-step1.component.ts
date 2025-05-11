import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxCustomEvent, DatetimeCustomEvent, IonicModule, ModalController } from '@ionic/angular';
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
  IonDatetimeButton,
  IonModal,
  IonDatetime,
} from '@ionic/angular/standalone';
import { CountryCodeComponent } from 'src/app/country-code/country-code.component';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { MasterService } from 'src/app/services/master.service';
import { PlayerService } from 'src/app/services/player.service';
import { CurrentProfile, User, UserService } from 'src/app/services/user.service';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Component({
  selector: 'app-onboarding-step1',
  templateUrl: './onboarding-step1.component.html',
  styleUrls: ['./onboarding-step1.component.scss'],
  imports: [
    IonicModule,
    // IonModal,
    // IonDatetime,
    // // IonIcon,
    // IonInput,
    // IonLabel,
    // IonRadioGroup,
    // IonRadio,
    // IonCheckbox,
    // IonSelect,
    // IonSelectOption,
    // IonButton,
    StepProgressComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class OnboardingStep1Component implements OnInit {
  playerProfileFormGroup!: FormGroup;
  getUser!: User;
  checkBox: boolean = true;
  showCalendar:boolean = false;
  selectedOption: string | null = null;
  ifEmerOther:boolean = false;
emergencyRel:any = ['Father', 'Mother', 'Guardian', 'Brother', 'Sister', 'Husband', 'Wife', 'Fianće(e)', 'Grandparent', 'Aunt', 'Uncle', 'Cousin', 'Friend', 'Coach', 'Teacher', 'Employer', 'Neighbour', 'Other'];
location:Location = inject(Location);
  constructor(
    private playerService: PlayerService,
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
      emergencyPhoneCode: this.getUser.phoneCode,
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
        '',
        Validators.required
      ),
      emergencyPhoneCode: new FormControl('', Validators.required),
      emergencyPhone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });

    

  }

  onSelectionChange(event:any){
   console.log(event.target.value);
   
    if(event.target.value === 'Other'){
      this.ifEmerOther = true;
    }
    else this.ifEmerOther=false; return

  }

  getPlayerProfileDetail() {
    console.log('hello');
    let collectedData = this.playerProfileFormGroup.value;
    
    this.playerService
      .playerProfileDetail(collectedData)
      .subscribe((res) => {
        if (res) {
        this.userService.setCurrentProfile(res);
          this.router.navigateByUrl('/onboarding-step2');
        }
        
      },(err)=>{
        console.log(err);
        
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
    this.playerProfileFormGroup.patchValue({ emergencyPhoneCode: data });
  }

  checkBoxValue(ev: CheckboxCustomEvent) {
    this.checkBox = ev.detail.checked;
    if (this.checkBox == false) {
      this.playerProfileFormGroup.get('emergencyName')?.reset();
      this.playerProfileFormGroup.get('emergencyRelationship')?.reset();
      this.playerProfileFormGroup.get('emergencyPhoneCode')?.reset();
      this.playerProfileFormGroup.get('emergencyPhone')?.reset();
    } else {
      this.playerProfileFormGroup.patchValue({
        emergencyName: this.getUser.firstName,
      });
      this.playerProfileFormGroup.patchValue({
        emergencyRelationship: 'Account Owner',
      });
      this.playerProfileFormGroup.patchValue({
        emergencyPhoneCode: this.getUser.phoneCode,
      });
      this.playerProfileFormGroup.patchValue({
        emergencyPhone: this.getUser.phone,
      });
    }
  }

  openCalendar(){
    this.showCalendar = true;
  }

  test(ev:DatetimeCustomEvent){
    this.playerProfileFormGroup.patchValue({dob: ev.detail.value});
    this.showCalendar = false;
  }
  dismiss(){
    this.location.back();
  }
}
