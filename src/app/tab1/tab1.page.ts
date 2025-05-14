import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { OnboardingStartComponent } from '../onboarding/onboarding-start/onboarding-start.component';
import { OnboardingListProfileComponent } from '../onboarding/onboarding-list-profile/onboarding-list-profile.component';
import { ProfileSelectorComponent } from '../dashboard/profile-selector/profile-selector.component';
import { MyFavoritesComponent } from '../dashboard/my-favorites/my-favorites.component';
import { MyBookingsComponent } from '../dashboard/my-bookings/my-bookings.component';
import { TermBadgeComponent } from '../dashboard/term-badge/term-badge.component';
import { BounxLogoIconComponent } from '../general/bounx-logo-icon/bounx-logo-icon.component';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonContent,
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // OnboardingStartComponent,
    // OnboardingListProfileComponent,
    ProfileSelectorComponent,
    MyFavoritesComponent,
    MyBookingsComponent,
    TermBadgeComponent,
    BounxLogoIconComponent,
  ],
})
export class Tab1Page {
  constructor(public playerService: PlayerService) {}
  ngOnInit() {}
}
