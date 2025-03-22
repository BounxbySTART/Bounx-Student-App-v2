import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
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
    });
  }
}
