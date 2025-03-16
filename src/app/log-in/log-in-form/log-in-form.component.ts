import { Component, OnInit } from '@angular/core';
import {
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonInputPasswordToggle,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  imports: [
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonInputPasswordToggle,
    IonButton
  ],
})
export class LogInFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
