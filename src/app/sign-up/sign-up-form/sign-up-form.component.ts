import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonCheckbox, IonInput, IonInputPasswordToggle, IonIcon, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';
import { MasterService } from 'src/app/services/master.service';

export interface Country {
  name: string;
  flag: string;
  code: string;
  dialCode: string;
}
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  imports: [
    IonicModule,
    CommonModule,/* 
    IonCheckbox,
    IonInput,
    IonInputPasswordToggle,
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton */
  ],
  providers:[MasterService]
})
export class SignUpFormComponent implements OnInit {
  countries: Country[] = [];


  constructor(private masterService: MasterService) {
  }

  ngOnInit() {
    this.getAllCountries();
  }
  getAllCountries() {
    this.masterService.getAllCountries().subscribe((res: any) => {
      this.countries = res;
    })
  }
}
