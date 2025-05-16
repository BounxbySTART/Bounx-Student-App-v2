import { Component, OnInit } from '@angular/core';
import { IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-academy-profile-about',
  templateUrl: './academy-profile-about.component.html',
  styleUrls: ['./academy-profile-about.component.scss'],
  imports: [
    IonItem
  ],
})
export class AcademyProfileAboutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
