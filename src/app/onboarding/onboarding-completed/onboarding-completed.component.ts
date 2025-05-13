import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { OnboardingListProfileComponent } from '../onboarding-list-profile/onboarding-list-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-completed',
  templateUrl: './onboarding-completed.component.html',
  styleUrls: ['./onboarding-completed.component.scss'],
  imports: [IonContent, IonButton, OnboardingListProfileComponent],
})
export class OnboardingCompletedComponent implements OnInit {
  constructor(public router:Router) {}

  ngOnInit() {}
  
  redirecToDashBoard()
{
   this.router.navigateByUrl('/tabs/tab1');
}
}
