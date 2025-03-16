import { Component, OnInit } from '@angular/core';
import { IonIcon, IonInput, IonInputPasswordToggle, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reset-pass-form-step2',
  templateUrl: './reset-pass-form-step2.component.html',
  styleUrls: ['./reset-pass-form-step2.component.scss'],
  imports: [
    IonIcon,
    IonInput,
    IonInputPasswordToggle,
    IonButton
  ],
})
export class ResetPassFormStep2Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
