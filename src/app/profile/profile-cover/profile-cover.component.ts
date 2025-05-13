import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.scss'],
})
export class ProfileCoverComponent {
  firstName:string='';
  imageUrl:string=environment.profileImageUrl;
  lastName:string='';
  profilePicture:string='';
  @Input() profileId:number=0;
  constructor(public playerService:PlayerService) { }

  ngOnChanges(){
    this.getCurrentProfileInfo();
  }
  getCurrentProfileInfo(){
    this.playerService.getPlayerProfile(this.profileId).subscribe((res:any)=>{
      console.log(res);
      this.firstName = res.firstName;
      this.lastName= res.lastName;
      this.profilePicture = res.profilePicture;
    })
  }

}
