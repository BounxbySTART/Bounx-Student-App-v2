import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonInput,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonButton
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';

@Component({
  selector: 'app-onboarding-step1',
  templateUrl: './onboarding-step1.component.html',
  styleUrls: ['./onboarding-step1.component.scss'],
  imports: [
    IonIcon,
    IonInput,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonButton,
    StepProgressComponent
  ],
})
export class OnboardingStep1Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
