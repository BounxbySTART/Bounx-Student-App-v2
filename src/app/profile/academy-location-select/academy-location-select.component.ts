import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-academy-location-select',
  templateUrl: './academy-location-select.component.html',
  styleUrls: ['./academy-location-select.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ],
})
export class AcademyLocationSelectComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
