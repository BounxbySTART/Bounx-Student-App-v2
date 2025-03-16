import { Component, OnInit } from '@angular/core';
import {
  IonList,
  IonItemSliding,
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-list-profile',
  templateUrl: './onboarding-list-profile.component.html',
  styleUrls: ['./onboarding-list-profile.component.scss'],
  imports: [
    IonList,
    IonItemSliding,
    IonItem,
    IonAvatar,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonButton
  ],
})
export class OnboardingListProfileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  preventEvent(ev: Event) {
    ev.stopPropagation();
  }

  open(undefined: undefined) {
    // throw new Error('Method not implemented.');
  }

}
