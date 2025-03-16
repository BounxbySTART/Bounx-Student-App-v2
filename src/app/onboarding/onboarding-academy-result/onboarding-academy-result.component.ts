import { Component, OnInit } from '@angular/core';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-academy-result',
  templateUrl: './onboarding-academy-result.component.html',
  styleUrls: ['./onboarding-academy-result.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonButton
  ],
})
export class OnboardingAcademyResultComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
