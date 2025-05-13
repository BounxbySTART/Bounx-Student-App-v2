import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-academy-coach-list',
  templateUrl: './academy-coach-list.component.html',
  styleUrls: ['./academy-coach-list.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel
  ],
})
export class AcademyCoachListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
