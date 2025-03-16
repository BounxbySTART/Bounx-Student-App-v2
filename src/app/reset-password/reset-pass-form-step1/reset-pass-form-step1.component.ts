import { Component, OnInit } from '@angular/core';
import { IonIcon, IonLabel, IonSelect, IonSelectOption, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reset-pass-form-step1',
  templateUrl: './reset-pass-form-step1.component.html',
  styleUrls: ['./reset-pass-form-step1.component.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonButton
  ],
})
export class ResetPassFormStep1Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
