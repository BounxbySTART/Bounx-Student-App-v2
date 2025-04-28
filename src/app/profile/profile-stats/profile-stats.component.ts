import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.scss'],
  imports: [ IonIcon ]
})
export class ProfileStatsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
