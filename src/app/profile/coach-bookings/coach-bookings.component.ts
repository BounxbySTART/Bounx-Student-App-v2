import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton } from "@ionic/angular/standalone";
import { CardBookingComponent } from "../../general/card-booking/card-booking.component";

@Component({
  selector: 'app-coach-bookings',
  templateUrl: './coach-bookings.component.html',
  styleUrls: ['./coach-bookings.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    CardBookingComponent
],
})
export class CoachBookingsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
