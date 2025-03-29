import { Component } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { OnboardingStartComponent } from "../onboarding/onboarding-start/onboarding-start.component";
import { OnboardingListProfileComponent } from "../onboarding/onboarding-list-profile/onboarding-list-profile.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, OnboardingStartComponent, OnboardingListProfileComponent]
})
export class Tab1Page {

  constructor() {}

}
