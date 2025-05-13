import { Component, Input, OnInit } from '@angular/core';
import {
  IonIcon,
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { OnboardingListPaymentComponent } from '../onboarding-list-payment/onboarding-list-payment.component';
import { Location } from '@angular/common';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-onboarding-step4',
  templateUrl: './onboarding-step4.component.html',
  styleUrls: ['./onboarding-step4.component.scss'],
  imports: [
    IonIcon,
    StepProgressComponent,
    OnboardingListPaymentComponent,
    ReactiveFormsModule
  ],
})
export class OnboardingStep4Component  implements OnInit {
paymentInfoGroup!:FormGroup
  constructor(public location:Location, public router:Router, public playerService:PlayerService) { }

  ngOnInit() {
    this.paymentInfoGroup = new FormGroup({
      cardNumber: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      expiryDate: new FormControl('',[Validators.required]),
      cvv:new FormControl('',[Validators.required])
    
    });
  }

 
navigateToCompletion(){
  
  this.router.navigateByUrl('/onboarding-complete');
}
  dismiss(){
this.location.back();
  }
}
