import { Component, OnInit } from '@angular/core';
import { IonIcon, IonContent } from "@ionic/angular/standalone";
import { CoachHeaderComponent } from "../coach-header/coach-header.component";
import { ContentTabsCoachComponent } from "../content-tabs-coach/content-tabs-coach.component";
import { CoachProfileDeteComponent } from "../coach-profile-dete/coach-profile-dete.component";
import { CoachLocationsComponent } from "../coach-locations/coach-locations.component";
import { CoachBookingsComponent } from "../coach-bookings/coach-bookings.component";

@Component({
  selector: 'app-p-coach',
  templateUrl: './p-coach.component.html',
  styleUrls: ['./p-coach.component.scss'],
  imports: [
    IonIcon,
    IonContent,
    CoachHeaderComponent,
    ContentTabsCoachComponent,
    CoachProfileDeteComponent,
    CoachLocationsComponent,
    CoachBookingsComponent
],
})
export class PCoachComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
