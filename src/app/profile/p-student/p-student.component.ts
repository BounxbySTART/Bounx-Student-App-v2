import { Component, Inject, OnInit } from '@angular/core';
import { ProfileCoverComponent } from '../profile-cover/profile-cover.component';
import { ContentTabsComponent } from '../content-tabs/content-tabs.component';
import { BadgeLatestComponent } from '../badge-latest/badge-latest.component';
import { BadgeTermComponent } from '../badge-term/badge-term.component';
import { ProfileStatsComponent } from '../profile-stats/profile-stats.component';
import { CoachFeedbackCardComponent } from '../coach-feedback-card/coach-feedback-card.component';
import { FavoriteListingComponent } from '../favorite-listing/favorite-listing.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import {
  IonContent,
  IonIcon,
  IonButton,
  IonSegment,
} from '@ionic/angular/standalone';
import { PlayerProfileRequest } from 'src/types/player-profile-request';
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    PersonalDetailsComponent,
  ],
})
export class PStudentComponent implements OnInit {
  playerProfiles: PlayerProfileRequest[] = [];
  profileId:number=0; 
  firstName:string='';
  lastName:string='';

  constructor(public playerService: PlayerService, public router: Router, public activeRoute:ActivatedRoute, public location:Location) {
    
  }

  ngOnInit() {
    this.profileId = +(this.activeRoute.snapshot.paramMap.get('id')??0);
    console.log(this.profileId,"Hello");
    this.getPlayerProfiles();
  }

  getProfilesList() {
    if (this.playerProfiles && this.playerProfiles.length > 1) {
      this.router.navigateByUrl('/other-profiles/'+this.profileId);
      return;
    } else {
      return false;
    }
  }

  getPlayerProfiles() {
    
      this.playerProfiles = this.playerService.playerProfiles;
      
  }
  goToPreviousPage(){
    this.location.back();
  }
}
