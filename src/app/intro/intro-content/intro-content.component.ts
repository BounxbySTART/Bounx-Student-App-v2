import { Component, OnInit } from '@angular/core';
import { IntroSlideshowComponent } from '../intro-slideshow/intro-slideshow.component';
import { IntroFooterComponent } from '../intro-footer/intro-footer.component';

@Component({
  selector: 'app-intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.scss'],
  imports: [
    IntroSlideshowComponent,
    IntroFooterComponent
  ]
})
export class IntroContentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
