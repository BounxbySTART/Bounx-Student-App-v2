import { Location, NgClass, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonList, IonAvatar, IonItem, IonLabel } from "@ionic/angular/standalone";
import { PlayerService } from 'src/app/services/player.service';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Component({
  selector: 'app-other-profiles',
  templateUrl: './other-profiles.component.html',
  styleUrls: ['./other-profiles.component.scss'],
  imports: [IonLabel, IonItem, IonAvatar, IonList, IonIcon, IonButton,  IonContent, TitleCasePipe,NgClass]
})
export class OtherProfilesComponent  implements OnInit {
playerProfiles:PlayerProfileRequest[]=[];
profileId:number=0;
  constructor(public location:Location, public playerService:PlayerService, public router:Router,public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.profileId = +(this.activeRoute.snapshot.paramMap.get('id')??0);
  this.getPlayerProfiles();
  }

  getPlayerProfiles(){
    this.playerProfiles = this.playerService.playerProfiles;
  }

  dismiss(){
this.location.back();
  }

  getPlayerProfile(profileId:number){

    this.router.navigateByUrl('/p-student/'+profileId);

  }
}
