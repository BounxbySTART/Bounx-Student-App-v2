import { Component } from '@angular/core';

import { IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonLabel, IonTabs, IonTabBar, IonTabButton],
})
export class TabsPage {
  constructor() {}
}
