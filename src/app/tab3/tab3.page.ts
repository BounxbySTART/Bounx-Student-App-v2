import { Component } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonTitle, IonToolbar, IonContent, IonHeader],
})
export class Tab3Page {
  constructor() {}
}
