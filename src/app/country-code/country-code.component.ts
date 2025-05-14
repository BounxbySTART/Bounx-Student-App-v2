import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../services/master.service';
import {
  IonContent,
  IonSearchbar,
  IonRadioGroup,
  IonRadio,
  IonList,
  IonItem,
  ModalController,
  IonSkeletonText,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { IonInput } from '@ionic/angular';

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
    IonIcon,
    IonButton,
    IonLabel,
    IonSkeletonText,
    IonRadio,
    IonContent,
    IonSearchbar,
    IonRadioGroup,
    IonList,
    IonItem,
  ],
})
export class CountryCodeComponent implements AfterViewInit {
  countries: Country[] = [];
  @ViewChild('input') input!: IonSearchbar;

  constructor(
    private masterService: MasterService,
    private modalCtrl: ModalController
  ) {}
  ionViewDidEnter() {
    this.input.setFocus();
  }
  ngAfterViewInit() {
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
  cancel() {
    return this.modalCtrl.dismiss();
  }
}
