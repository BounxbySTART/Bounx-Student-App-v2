import { Component, OnInit } from '@angular/core';
import { 
  IonContent,
  IonIcon,
  IonButton,
  IonLabel,
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonCheckbox } from "@ionic/angular/standalone";
import { DropdownButtonComponent } from 'src/app/general/dropdown-button/dropdown-button.component';

@Component({
  selector: 'app-edit-personal-dete-form',
  templateUrl: './edit-personal-dete-form.component.html',
  styleUrls: ['./edit-personal-dete-form.component.scss'],
  imports: [
    IonCheckbox, 
    IonInput,
    IonLabel,
    IonButton,
    IonContent,
    IonIcon,
    IonRadioGroup,
    IonRadio,
    IonSelect,
    IonSelectOption,
    DropdownButtonComponent
  ]
})
export class EditPersonalDeteFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
