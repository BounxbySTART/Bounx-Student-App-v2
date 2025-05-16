import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonIcon } from "@ionic/angular/standalone";
import { PgBadgesTabsComponent } from "../pg-badges-tabs/pg-badges-tabs.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-pg-badges',
  templateUrl: './pg-badges.component.html',
  styleUrls: ['./pg-badges.component.scss'],
  imports: [IonIcon, IonButton, IonContent, PgBadgesTabsComponent]
})
export class PgBadgesComponent  implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {}

  returnToPreviousPage(){
this.location.back();
  }

}
