import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  imports: [IonItem, IonButton, IonIcon]
})
export class PersonalDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
