import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import {
  IonContent,
  IonSearchbar,
  IonRadioGroup,
  IonRadio,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/providers/modal-controller';

export interface Country {
  name: string;
  flag: string;
  code: string;
  dialCode: string;
}

@Component({
  selector: 'app-country-code',
  templateUrl: './country-code.component.html',
  styleUrls: ['./country-code.component.scss'],
  imports: [
    IonRadio,
    IonContent,
    IonSearchbar,
    IonRadioGroup,
    IonList,
    IonItem,
  ],
})
export class CountryCodeComponent implements OnInit {
  countries: Country[] = [];
  constructor(
    private masterService: MasterService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getAllCountries();
  }
  getAllCountries() {
    this.masterService.getAllCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }
  expandModal() {
    this.modalCtrl.getTop().then((modal) => {
      if (modal) modal.setCurrentBreakpoint(0.75);
    });
  }

  searchCountry(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const searchText = target.value?.toLowerCase() || '';
    this.masterService.getAllCountries(searchText).subscribe((res: any) => {
      this.countries = res;
    });
  }
  handleChange(event: Event): Promise<boolean> {
    const target = event.target as HTMLInputElement;
    // selected value
    console.log('selected value', target.value);
    return this.modalCtrl.dismiss(target.value, 'confirm');
  }
}
