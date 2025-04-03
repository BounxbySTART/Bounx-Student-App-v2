import { Component, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-profile-selector',
  templateUrl: './profile-selector.component.html',
  styleUrls: ['./profile-selector.component.scss'],
  imports: [ IonIcon ]
})
export class ProfileSelectorComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
