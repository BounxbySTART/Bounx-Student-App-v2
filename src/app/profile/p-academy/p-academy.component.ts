import { Component, OnInit } from '@angular/core';
import { AcademyHeaderComponent } from "../academy-header/academy-header.component";
import { ContentTabsAcademyComponent } from "../content-tabs-academy/content-tabs-academy.component";
import { AcademyBookingsComponent } from "../academy-bookings/academy-bookings.component";
import { IonContent, IonIcon } from "@ionic/angular/standalone";
import { AcademyProfileBranchDeteComponent } from "../academy-profile-branch-dete/academy-profile-branch-dete.component";
import { AcademyProfileAboutComponent } from "../academy-profile-about/academy-profile-about.component";
import { AcademyCoachListComponent } from "../academy-coach-list/academy-coach-list.component";
import { NoResultAcademyBookingsComponent } from "../no-result-academy-bookings/no-result-academy-bookings.component";

@Component({
  selector: 'app-p-academy',
  templateUrl: './p-academy.component.html',
  styleUrls: ['./p-academy.component.scss'],
  imports: [
    IonContent,
    IonIcon,
    AcademyHeaderComponent,
    ContentTabsAcademyComponent,
    AcademyBookingsComponent,
    AcademyProfileBranchDeteComponent,
    AcademyProfileAboutComponent,
    AcademyCoachListComponent,
    NoResultAcademyBookingsComponent
],
})
export class PAcademyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
