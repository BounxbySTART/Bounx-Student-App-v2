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
  ModalController,
} from '@ionic/angular/standalone';
import { PlayerProfileRequest } from 'src/types/player-profile-request';
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { OtherProfilesComponent } from '../other-profiles/other-profiles.component';
import { Tab } from 'src/types/tabs-in-player-profile';

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
    NgIf
  ],
})
export class PStudentComponent implements OnInit {
  playerProfiles: PlayerProfileRequest[] = [];
  profileId: number = 0;
  playerProfile: any;
  tabs!: Tab[];
  atPresentTabName!:string;
  
  constructor(
    public playerService: PlayerService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public location: Location,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.profileId = +(this.activeRoute.snapshot.paramMap.get('id') ?? 0);
    this.getPlayerProfile();
    this.getPlayerProfiles();
    this.tabs= [{ name: 'Profile', title: 'Bounx Profile' },
    { name: 'Feedback', title: 'Feedback' },
    { name: 'Leaderboard', title: 'Leaderboard' },
    { name: 'Favorites', title: 'Favorites' }]
  }



  getPlayerProfile() {
    this.playerService
      .getPlayerProfile(this.profileId)
      .subscribe((res: any) => {
        this.playerProfile = res;
      });
  }

  getProfilesList() {
    if (this.playerProfiles && this.playerProfiles.length > 1) {
      this.presentModal();
      // this.router.navigateByUrl('/other-profiles/'+this.profileId);
      return;
    } else {
      return false;
    }
  }

  async presentModal() {
    console.log('In Modal');

    const modal = await this.modalController.create({
      component: OtherProfilesComponent,
      initialBreakpoint: 0.65,
      breakpoints: [0, 0.65, 0.85],
      componentProps: {
        profileId: this.profileId,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role == 'confirm') {
      this.profileId = data;
      this.getPlayerProfiles();
    }
  }

  getPlayerProfiles() {
    this.playerProfiles = this.playerService.playerProfiles;
  }

  tabChanged(tabName:any) {
    console.log(tabName);

    this.atPresentTabName = tabName;
    if (this.atPresentTabName == 'news') {
      // this.loadNews();
    }
    if (this.atPresentTabName == 'company') {
      // this.loadCompanyDetails();
    }
    if (this.atPresentTabName == 'financial') {
      // this.generateDividendData();
    }
  }

  goToPreviousPage() {
    this.location.back();
  }
}
