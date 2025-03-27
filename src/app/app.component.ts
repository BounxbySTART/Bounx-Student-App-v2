import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  closeOutline,
  radioButtonOffOutline,
  addOutline,
  checkmarkCircleOutline,
  calendarNumberOutline,
  ellipsisHorizontalOutline,
  trashOutline,
  createOutline,
  chevronDownOutline,
  arrowBackOutline,
  searchOutline,
} from 'ionicons/icons';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonApp, ],
})
export class AppComponent {
  constructor() {
    this.registerIonIcons();
  }

  registerIonIcons() {
    addIcons({
      closeOutline,
      radioButtonOffOutline,
      addOutline,
      checkmarkCircleOutline,
      calendarNumberOutline,
      ellipsisHorizontalOutline,
      trashOutline,
      createOutline,
      chevronDownOutline,
      arrowBackOutline,
      searchOutline
    });
  }
}
