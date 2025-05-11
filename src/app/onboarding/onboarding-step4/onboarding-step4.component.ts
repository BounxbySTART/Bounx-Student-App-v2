import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { OnboardingListPaymentComponent } from '../onboarding-list-payment/onboarding-list-payment.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-onboarding-step4',
  templateUrl: './onboarding-step4.component.html',
  styleUrls: ['./onboarding-step4.component.scss'],
  imports: [
    IonIcon,
    IonInput,
    IonButton,
    StepProgressComponent,
    OnboardingListPaymentComponent
  ],
})
export class OnboardingStep4Component  implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {}

  dismiss(){
this.location.back();
  }
}
