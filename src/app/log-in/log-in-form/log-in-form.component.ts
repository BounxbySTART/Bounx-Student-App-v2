import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonInputPasswordToggle,
  IonButton
} from '@ionic/angular/standalone';
import { MasterService } from 'src/app/services/master.service';
import { LogInFooterComponent } from "../log-in-footer/log-in-footer.component";

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  imports: [
    /* IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonInputPasswordToggle,
    IonButton */
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    LogInFooterComponent
],
})
export class LogInFormComponent  implements OnInit {

  loginForm!: FormGroup;
  constructor(private masterService:MasterService) {

   }

  ngOnInit() {
this.initiateLoginForm();
    
  }

  initiateLoginForm(){
    this.loginForm = new FormGroup({
      phone: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$'
        ),
      ])
    }
   );
  }
  userLogin(){
    let loginDetails = this.loginForm.value;
  this.masterService.login({...loginDetails,userType:"PLAYER"}).subscribe((res:any)=>{
          console.log(res,'Test1');    
    },(err)=>{})
  }

}
