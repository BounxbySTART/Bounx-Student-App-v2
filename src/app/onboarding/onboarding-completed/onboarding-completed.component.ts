import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-completed',
  templateUrl: './onboarding-completed.component.html',
  styleUrls: ['./onboarding-completed.component.scss'],
  imports: [
    IonButton
  ],
})
export class OnboardingCompletedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
