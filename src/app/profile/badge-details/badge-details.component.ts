import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-badge-details',
  templateUrl: './badge-details.component.html',
  styleUrls: ['./badge-details.component.scss'],
  imports: [
    IonButton,
    IonContent,
    IonIcon
  ]
})
export class BadgeDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
