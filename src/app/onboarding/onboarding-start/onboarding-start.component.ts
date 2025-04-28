import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { OnboardingListProfileComponent } from '../onboarding-list-profile/onboarding-list-profile.component';

@Component({
  selector: 'app-onboarding-start',
  templateUrl: './onboarding-start.component.html',
  styleUrls: ['./onboarding-start.component.scss'],
  imports: [IonContent, OnboardingListProfileComponent],
})
export class OnboardingStartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
