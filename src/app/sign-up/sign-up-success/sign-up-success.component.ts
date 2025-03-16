import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-up-success',
  templateUrl: './sign-up-success.component.html',
  styleUrls: ['./sign-up-success.component.scss'],
  imports: [
    IonButton
  ],
})
export class SignUpSuccessComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
