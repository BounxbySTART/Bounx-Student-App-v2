import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonLabel, IonInput } from "@ionic/angular/standalone";
import { DropdownButtonComponent } from 'src/app/general/dropdown-button/dropdown-button.component';

@Component({
  selector: 'app-edit-contact-form',
  templateUrl: './edit-contact-form.component.html',
  styleUrls: ['./edit-contact-form.component.scss'],
  imports: [
    IonInput,
    IonLabel,
    IonButton,
    IonContent,
    IonIcon,
    DropdownButtonComponent
  ]
})
export class EditContactFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
