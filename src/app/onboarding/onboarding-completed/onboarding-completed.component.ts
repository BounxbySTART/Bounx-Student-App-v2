import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { OnboardingListProfileComponent } from '../onboarding-list-profile/onboarding-list-profile.component';

@Component({
  selector: 'app-onboarding-completed',
  templateUrl: './onboarding-completed.component.html',
  styleUrls: ['./onboarding-completed.component.scss'],
  imports: [IonContent, IonButton, OnboardingListProfileComponent],
})
export class OnboardingCompletedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
