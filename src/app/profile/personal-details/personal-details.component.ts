import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonItem } from "@ionic/angular/standalone";
import { DateFromUTCPipe } from "../../pipes/date-from-utc.pipe";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  imports: [IonItem, IonButton, IonIcon, DateFromUTCPipe]
})
export class PersonalDetailsComponent  implements OnInit {
  @Input() profileId: number | undefined;
  @Input() studentProfile: any;
  constructor() { }

  ngOnInit() {

  }
 



}
