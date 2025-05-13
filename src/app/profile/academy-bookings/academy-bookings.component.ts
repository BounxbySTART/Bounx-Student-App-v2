import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { CardBookingComponent } from 'src/app/general/card-booking/card-booking.component';

@Component({
  selector: 'app-academy-bookings',
  templateUrl: './academy-bookings.component.html',
  styleUrls: ['./academy-bookings.component.scss'],
  imports: [
    IonIcon, 
    IonButton,
    CardBookingComponent
  ],
})
export class AcademyBookingsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
