import { Component, OnInit } from '@angular/core';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-list-payment',
  templateUrl: './onboarding-list-payment.component.html',
  styleUrls: ['./onboarding-list-payment.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonIcon,
    IonButton
  ],
})
export class OnboardingListPaymentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
