import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.scss'],
})
export class ProfileCoverComponent {
  imageUrl: string = environment.profileImageUrl;
  @Input() profile: any;
  constructor(public playerService: PlayerService) {}

  ngOnChanges() {
    this.getCurrentProfileInfo();
  }
  getCurrentProfileInfo() {}
}
