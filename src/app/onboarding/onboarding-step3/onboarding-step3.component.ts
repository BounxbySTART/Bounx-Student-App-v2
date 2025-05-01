import { Location, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput, IonButton } from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';

@Component({
  selector: 'app-onboarding-step3',
  templateUrl: './onboarding-step3.component.html',
  styleUrls: ['./onboarding-step3.component.scss'],
  imports: [IonButton, 
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    StepProgressComponent,
    NgFor
  ],
})
export class OnboardingStep3Component  implements OnInit {
searchByList:any[]=[{label:'City/State',value:'location'},{label:'Academy Name', value:'name'}]
  constructor() { }
location:Location = inject(Location);

  ngOnInit() {}



  dismiss(){
this.location.back();
  }

}
