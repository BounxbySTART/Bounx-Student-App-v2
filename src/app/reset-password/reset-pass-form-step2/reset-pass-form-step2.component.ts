import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { passwordHasAlphabetValidator, passwordHasNumericValidator, passwordMinlengthValidator } from 'src/app/validators/create-password-validator';

@Component({
  selector: 'app-reset-pass-form-step2',
  templateUrl: './reset-pass-form-step2.component.html',
  styleUrls: ['./reset-pass-form-step2.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
})
export class ResetPassFormStep2Component  implements OnInit {
  resetPasswordForm!:FormGroup;

  constructor(private modalCtrl:ModalController) { }


  ngOnInit() {
this.initForm();
  }

  initForm(){
    this.resetPasswordForm = new FormGroup({ 
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$'
        ),
        passwordHasAlphabetValidator(),
        passwordHasNumericValidator(),
        passwordMinlengthValidator(8)
      ])
    });
  }

}
