import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-onboarding-add-profile',
  templateUrl: './onboarding-add-profile.component.html',
  styleUrls: ['./onboarding-add-profile.component.scss'],
  imports: [
      IonItem,]
})
export class OnboardingAddProfileComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  redirectToCreateProfile(){
this.router.navigateByUrl('/onboarding-step1')
  }

}
