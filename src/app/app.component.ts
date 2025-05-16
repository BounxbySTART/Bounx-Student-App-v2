import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  addOutline,
  arrowBackOutline,
  arrowForwardOutline,
  calendarOutline,
  calendarNumberOutline,
  checkboxOutline,
  checkmarkCircleOutline,
  chevronDownOutline,
  chevronUpOutline,
  closeOutline,
  createOutline,
  ellipsisHorizontal,
  ellipsisHorizontalOutline,
  eyeOffOutline,
  eyeOutline,
  funnelOutline,
  informationCircleOutline,
  radioButtonOffOutline,
  searchOutline,
  shareSocialOutline,
  squareOutline,
  trashOutline
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
      addOutline,
      arrowBackOutline,
      arrowForwardOutline,
      calendarOutline,
      calendarNumberOutline,
      checkboxOutline,
      checkmarkCircleOutline,
      chevronDownOutline,
      chevronUpOutline,
      closeOutline,
      createOutline,
      ellipsisHorizontalOutline,
      ellipsisHorizontal,
      eyeOffOutline,
      eyeOutline,
      funnelOutline,
      informationCircleOutline,
      radioButtonOffOutline,
      searchOutline,
      shareSocialOutline,
      squareOutline,
      trashOutline,
      followHeart: 'assets/icon/icon_follow_heart.svg',
      followHeartTick: 'assets/icon/icon_follow_heart_tick.svg',
    });
  }
}
