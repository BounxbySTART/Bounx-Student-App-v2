import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reset-pass-success',
  templateUrl: './reset-pass-success.component.html',
  styleUrls: ['./reset-pass-success.component.scss'],
  imports: [
    IonIcon,
    IonButton
  ],
})
export class ResetPassSuccessComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
