import { Component, OnInit } from '@angular/core';
import { IntroSlideshowComponent } from '../intro-slideshow/intro-slideshow.component';
import { IntroFooterComponent } from '../intro-footer/intro-footer.component';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.scss'],
  imports: [
    IntroSlideshowComponent,
    IntroFooterComponent,
    IonContent
  ]
})
export class IntroContentComponent  implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {}

}
