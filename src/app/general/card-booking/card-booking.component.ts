import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-booking',
  templateUrl: './card-booking.component.html',
  styleUrls: ['./card-booking.component.scss'],
  imports: [
    IonButton,
    IonIcon
  ]
})
export class CardBookingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
