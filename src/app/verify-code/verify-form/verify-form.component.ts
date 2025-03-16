import { Component, OnInit } from '@angular/core';
import { IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
  imports: [
    IonIcon,
    IonInput,
    IonButton
  ],
})
export class VerifyFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
