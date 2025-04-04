import { Component, OnInit } from '@angular/core';
import { IonItem, IonAvatar, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss'],
  imports: [ IonItem, IonAvatar, IonLabel ],
})
export class MyFavoritesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
