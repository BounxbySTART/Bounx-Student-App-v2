import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonList,
  IonItemSliding,
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonButton,
  
} from '@ionic/angular/standalone';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Component({
  selector: 'app-onboarding-list-profile',
  templateUrl: './onboarding-list-profile.component.html',
  styleUrls: ['./onboarding-list-profile.component.scss'],
  imports: [
    IonContent,
    IonList,
    IonItemSliding,
    IonItem,
    IonAvatar,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonButton,
    CommonModule
  ],
})
export class OnboardingListProfileComponent implements OnInit {
  playerProfiles:PlayerProfileRequest[]=[];
  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayerProfiles();
  }

  preventEvent(ev: Event) {
    ev.stopPropagation();
  }

  open(undefined: undefined) {
    // throw new Error('Method not implemented.');
  }

  redirectToAddProfile() {
    this.router.navigateByUrl('/add-profile');
  }

  getPlayerProfiles() {
    this.playerService.getPlayerProfiles().subscribe((res:any) => {
      this.playerProfiles = res;
    });
  }
}
