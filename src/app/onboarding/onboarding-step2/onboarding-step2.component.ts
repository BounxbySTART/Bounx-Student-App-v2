import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonButton
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';

@Component({
  selector: 'app-onboarding-step2',
  templateUrl: './onboarding-step2.component.html',
  styleUrls: ['./onboarding-step2.component.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonButton,
    StepProgressComponent
  ],
})
export class OnboardingStep2Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
