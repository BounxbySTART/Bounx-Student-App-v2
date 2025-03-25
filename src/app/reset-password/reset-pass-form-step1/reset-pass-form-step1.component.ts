import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonIcon, IonLabel, IonSelect, IonSelectOption, IonInput, IonButton } from '@ionic/angular/standalone';
import { CountryCodeComponent } from 'src/app/country-code/country-code.component';

@Component({
  selector: 'app-reset-pass-form-step1',
  templateUrl: './reset-pass-form-step1.component.html',
  styleUrls: ['./reset-pass-form-step1.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
})
export class ResetPassFormStep1Component implements OnInit {
  resetPasswordForm!: FormGroup;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.initResetPassword();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CountryCodeComponent,
      initialBreakpoint: 0.25,
      breakpoints:[0,0.25,0.75],
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

      console.log(data,"test");
      this.resetPasswordForm.patchValue({phoneCode:data});
      
  }
  initResetPassword(){
    this.resetPasswordForm = new FormGroup({
      phoneCode: new FormControl(''),
      phone: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(15)])
    })
  }
  generateCode(){

  }

}
