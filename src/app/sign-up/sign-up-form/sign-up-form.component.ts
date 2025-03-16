import { Component, OnInit } from '@angular/core';
import { IonCheckbox, IonInput, IonInputPasswordToggle, IonIcon, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  imports: [
    IonCheckbox,
    IonInput,
    IonInputPasswordToggle,
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton
  ],
})
export class SignUpFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
