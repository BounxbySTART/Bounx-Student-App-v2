import { Component, Input, OnInit } from '@angular/core';
import { IonIcon, AlertController } from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { OnboardingListPaymentComponent } from '../onboarding-list-payment/onboarding-list-payment.component';
import { Location } from '@angular/common';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-onboarding-step4',
  templateUrl: './onboarding-step4.component.html',
  styleUrls: ['./onboarding-step4.component.scss'],
  imports: [
    IonIcon,
    StepProgressComponent,
    OnboardingListPaymentComponent,
    ReactiveFormsModule,
  ],
})
export class OnboardingStep4Component implements OnInit {
  paymentInfoGroup!: FormGroup;
  profileId: number | undefined;
  constructor(
    public location: Location,
    public router: Router,
    public playerService: PlayerService,
    private alertController: AlertController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.profileId = this.userService.currentProfile.id;
    this.paymentInfoGroup = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
    });
  }

  navigateToCompletion() {
    this.router.navigateByUrl('/onboarding-complete');
  }
  async dismiss() {
    const alert = await this.alertController.create({
      header: 'Cancel Profile creation?',
      message: `Your data will not be saved and profile will not be created if you cancel sign up process now`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // nothing to do
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            //something to do
            if (this.profileId) {
              this.playerService
                .playerProfileRemove(this.profileId)
                .subscribe((res) => {
                  console.log(res);
                });
            }
            this.router.navigateByUrl('/onboarding-complete');
          },
        },
      ],
    });

    await alert.present();
  }
  backToPrevious() {
    this.location.back();
  }
}
