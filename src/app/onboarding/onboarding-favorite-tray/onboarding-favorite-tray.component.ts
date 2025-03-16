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
  selector: 'app-onboarding-favorite-tray',
  templateUrl: './onboarding-favorite-tray.component.html',
  styleUrls: ['./onboarding-favorite-tray.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonButton
  ],
})
export class OnboardingFavoriteTrayComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
