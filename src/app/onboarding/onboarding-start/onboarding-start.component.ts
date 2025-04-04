import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-onboarding-start',
  templateUrl: './onboarding-start.component.html',
  styleUrls: ['./onboarding-start.component.scss'],
  imports:[IonContent]
})
export class OnboardingStartComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
