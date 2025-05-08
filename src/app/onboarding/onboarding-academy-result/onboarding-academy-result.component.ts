import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';
import { AcademyService } from 'src/app/services/academy.service';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-onboarding-academy-result',
  templateUrl: './onboarding-academy-result.component.html',
  styleUrls: ['./onboarding-academy-result.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonButton,
    NgFor
  ],
})
export class OnboardingAcademyResultComponent  implements OnInit {
  @Input() searchTextResults:any[] | undefined;
  profileId!:number;
  isFavourite:boolean = false;


  @Output() isFavouriteOpted:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public academyService:AcademyService, public userService:UserService, public playerService:PlayerService ) {
    // console.log(this.searchText);
  
   }
  ngOnInit() {
 
  
  }
//  @Body('profileId') profileId: number,
// @Body('locationId') locationId: number,

  addToFavorites(search:any){
   console.log(search.id);
   this.profileId = this.userService.currentProfile.id;
   console.log(this.profileId);
   let obj 
   this.playerService.studentFavLocationDetail({profileId:this.profileId,locationId:search.id}).subscribe((res)=>{
    console.log(res);
    this.isFavourite=true;
   })
   
   this.isFavouriteOpted.emit(this.isFavourite);
 
  }

}
