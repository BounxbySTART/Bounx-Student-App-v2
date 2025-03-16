import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';

@Component({
  selector: 'app-onboarding-step3',
  templateUrl: './onboarding-step3.component.html',
  styleUrls: ['./onboarding-step3.component.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    StepProgressComponent
  ],
})
export class OnboardingStep3Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
