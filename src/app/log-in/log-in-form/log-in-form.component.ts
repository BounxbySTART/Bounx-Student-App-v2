import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonInputPasswordToggle,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  imports: [
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonInputPasswordToggle,
    IonButton
  ],
})
export class LogInFormComponent  implements OnInit {

  loginForm!: FormGroup;
  constructor() {

   }

  ngOnInit() {
this.initiateLoginForm();
    
  }

  initiateLoginForm(){
    this.loginForm = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$'
        ),
      ])
    }
   );
  }

}
