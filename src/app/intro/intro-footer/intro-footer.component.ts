import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-intro-footer',
  templateUrl: './intro-footer.component.html',
  styleUrls: ['./intro-footer.component.scss'],
  imports: [
    IonButton
  ],
})
export class IntroFooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
