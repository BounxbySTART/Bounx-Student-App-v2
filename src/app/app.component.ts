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
  arrowForwardOutline,
  eyeOutline,
  eyeOffOutline
} from 'ionicons/icons';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonApp],
})
export class AppComponent {
  constructor(private userService: UserService) {
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
      searchOutline,
      arrowForwardOutline,
      eyeOutline,
      eyeOffOutline
    });
  }
}
