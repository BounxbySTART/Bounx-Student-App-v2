import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
  IonIcon
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-academy-bookings-filter',
  templateUrl: './academy-bookings-filter.component.html',
  styleUrls: ['./academy-bookings-filter.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonLabel,
    IonAvatar,
    IonItem,
    IonList, 
    IonContent
  ]
})
export class AcademyBookingsFilterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
