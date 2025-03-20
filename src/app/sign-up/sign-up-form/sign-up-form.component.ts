import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule
    /* 
    IonCheckbox,
    IonInput,
    IonInputPasswordToggle,
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton */
  ],
  providers: [MasterService]
})
export class SignUpFormComponent implements OnInit {
  signUpFormGroup!: FormGroup;


  constructor(private masterService: MasterService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[ -~]{2,}$/)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(/^[ -~]{2,}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$'
        ),]),
        phone: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(15)])
    });
  }

  verify() {
    let collectedData = this.signUpFormGroup.value;
    this.masterService.createPlayerUser(collectedData).subscribe((res: any) => {

    })
  }


}
