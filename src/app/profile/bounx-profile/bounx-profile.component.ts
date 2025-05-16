import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { BadgeTermComponent } from '../badge-term/badge-term.component';
import { ProfileStatsComponent } from '../profile-stats/profile-stats.component';

@Component({
  selector: 'app-bounx-profile',
  templateUrl: './bounx-profile.component.html',
  styleUrls: ['./bounx-profile.component.scss'],
  imports: [IonButton, IonIcon, BadgeTermComponent, ProfileStatsComponent],
})
export class BounxProfileComponent implements OnInit {
  constructor() {}
  @Input() profileId: number | undefined;
  @Input() studentProfile: any;
  ngOnInit() {}
}
