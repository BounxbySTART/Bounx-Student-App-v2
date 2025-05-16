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
import { environment } from 'src/environments/environment';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Component({
  selector: 'app-onboarding-list-profile',
  templateUrl: './onboarding-list-profile.component.html',
  styleUrls: ['./onboarding-list-profile.component.scss'],
  imports: [
    IonList,
    IonItemSliding,
    IonItem,
    IonAvatar,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonButton,
    IonContent,
    CommonModule,
  ],
})
export class OnboardingListProfileComponent implements OnInit {
  imageUrl:string=environment.profileImageUrl;
  playerProfiles: PlayerProfileRequest[] = [];
  deleteId:string=''
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
    this.router.navigateByUrl('/onboarding-step1');
  }

  getPlayerProfiles() {
    this.playerService.getPlayerProfiles().subscribe((res: any) => {
      this.playerProfiles = res;
      this.playerService.playerProfiles = res;
      console.log(this.playerProfiles);
     
    });
  }

  // {/profile/:id, GET} 
  getPlayerProfile(profileId:number){

    this.router.navigateByUrl('/p-student/'+profileId);

  }
  removeProfile(profileId:any,i:number){
    this.playerService.playerProfileRemove(profileId).subscribe((res)=>{
      console.log(res);
      this.playerProfiles.splice(i,1);
    })
  }

  
  editProfile(profileId:any){

  }
}
