import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';
import { SignUpUser, VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
  imports: [
    IonicModule
  ],
})
export class VerifyFormComponent implements OnInit {
  signUpUser!:SignUpUser;

  constructor(private verificationService:VerificationService) { }

  ngOnInit() {
    this.signUpUser= this.verificationService.signUpUser;
  }




}
