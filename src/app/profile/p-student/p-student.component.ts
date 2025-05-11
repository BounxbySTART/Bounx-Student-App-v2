import { Component, OnInit } from '@angular/core';
import { ProfileCoverComponent } from '../profile-cover/profile-cover.component';
import { ContentTabsComponent } from "../content-tabs/content-tabs.component";
import { BadgeLatestComponent } from "../badge-latest/badge-latest.component";
import { BadgeTermComponent } from "../badge-term/badge-term.component";
import { ProfileStatsComponent } from "../profile-stats/profile-stats.component";
import { CoachFeedbackCardComponent } from "../coach-feedback-card/coach-feedback-card.component";
import { FavoriteListingComponent } from "../favorite-listing/favorite-listing.component";
import { PersonalDetailsComponent } from "../personal-details/personal-details.component";
import { IonContent, IonIcon, IonButton, IonSegment } from "@ionic/angular/standalone";

@Component({
  selector: 'app-p-student',
  templateUrl: './p-student.component.html',
  styleUrls: ['./p-student.component.scss'],
  imports: [
    IonSegment,
    IonButton,
    IonIcon,
    IonContent, 
    ProfileCoverComponent,
    ContentTabsComponent,
    BadgeLatestComponent,
    BadgeTermComponent,
    ProfileStatsComponent,
    CoachFeedbackCardComponent,
    FavoriteListingComponent,
    PersonalDetailsComponent
]
})
export class PStudentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
