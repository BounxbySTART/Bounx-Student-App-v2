import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-badge-latest',
  templateUrl: './badge-latest.component.html',
  styleUrls: ['./badge-latest.component.scss'],
})
export class BadgeLatestComponent  implements OnInit {
  imageUrl:string=environment.badgeImageUrl;
@Input() profileId:number = 0;
badges:any[]=[];
  constructor(public playerService:PlayerService) { }

  ngOnInit() {
    this.getCurrentProfileInfo();
  }

  getCurrentProfileInfo(){
    this.playerService.getPlayerProfile(this.profileId).subscribe((res:any)=>{
   console.log(res,"badge");
   this.badges= res.badges;
 console.log(this.badges);
 
    })
  }
}
