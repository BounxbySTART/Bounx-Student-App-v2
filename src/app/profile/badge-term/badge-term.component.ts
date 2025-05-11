import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-badge-term',
  templateUrl: './badge-term.component.html',
  styleUrls: ['./badge-term.component.scss'],
  imports: [IonButton, IonIcon]
})
export class BadgeTermComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
