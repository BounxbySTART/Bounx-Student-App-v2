import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonList,
  IonAvatar,
  IonItem,
  IonLabel,
  ModalController,
} from '@ionic/angular/standalone';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Component({
  selector: 'app-other-profiles',
  templateUrl: './other-profiles.component.html',
  styleUrls: ['./other-profiles.component.scss'],
  imports: [
    IonLabel,
    IonItem,
    IonAvatar,
    IonList,
    IonIcon,
    IonButton,
    IonContent,
    TitleCasePipe,
    NgClass,
  ],
})
export class OtherProfilesComponent implements OnInit {
  imageUrl: string = environment.profileImageUrl;
  playerProfiles: PlayerProfileRequest[] = [];
  profileId: number = 0;
  constructor(
    public playerService: PlayerService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getPlayerProfiles();
  }

  getPlayerProfiles() {
    this.playerProfiles = this.playerService.playerProfiles;
  }

  dismiss() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

    getPlayerProfile(profileId: number) {
    // this.router.navigateByUrl('/p-student/'+profileId);

    return this.modalCtrl.dismiss(profileId, 'confirm');
  }
}
