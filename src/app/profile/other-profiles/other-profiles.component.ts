import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonList, IonAvatar, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-other-profiles',
  templateUrl: './other-profiles.component.html',
  styleUrls: ['./other-profiles.component.scss'],
  imports: [IonLabel, IonItem, IonAvatar, IonList, IonIcon, IonButton,  IonContent]
})
export class OtherProfilesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
