import { Component, OnInit } from '@angular/core';
import { IonList, IonLabel, IonButton, IonIcon, IonItem, IonAvatar, 
  IonItemOptions, IonItemOption, IonItemSliding } from "@ionic/angular/standalone";

@Component({
  selector: 'app-favorite-listing',
  templateUrl: './favorite-listing.component.html',
  styleUrls: ['./favorite-listing.component.scss'],
  imports: [
    IonItemSliding, 
    IonList,
    IonLabel,
    IonButton,
    IonIcon,
    IonItem,
    IonAvatar,
    IonItemOptions,
    IonItemOption
  ]
})
export class FavoriteListingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  preventEvent(ev: Event) {
    ev.stopPropagation();
  }

  open(undefined: undefined) {
    // throw new Error('Method not implemented.');
  }

}
