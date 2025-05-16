import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-selector',
  templateUrl: './profile-selector.component.html',
  styleUrls: ['./profile-selector.component.scss'],
  imports: [IonIcon, RouterLink],
})
export class ProfileSelectorComponent implements OnInit {
  profileImageUrl: string = environment.profileImageUrl;
  constructor(public playerService: PlayerService) {}

  ngOnInit() {}
}
