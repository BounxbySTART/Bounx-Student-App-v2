import { Component, OnInit } from '@angular/core';
import { IntroSlideshowComponent } from '../intro-slideshow/intro-slideshow.component';
import { IntroFooterComponent } from '../intro-footer/intro-footer.component';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.scss'],
  imports: [IntroSlideshowComponent, IntroFooterComponent, IonContent],
})
export class IntroContentComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    if (this.userService.user) {
      this.router.navigateByUrl('/tabs/tab1', {
        replaceUrl: true,
      });
    }
  }
}
