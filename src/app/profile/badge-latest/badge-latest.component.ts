import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-badge-latest',
  templateUrl: './badge-latest.component.html',
  styleUrls: ['./badge-latest.component.scss'],
})
export class BadgeLatestComponent implements OnInit {
  imageUrl: string = environment.badgeImageUrl;
  @Input() profile: any;
  badges: any[] = [];
  constructor(public playerService: PlayerService) {}

  ngOnInit() {}
}
