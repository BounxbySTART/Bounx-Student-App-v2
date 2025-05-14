import { Location, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonIcon,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonSearchbar,
  ModalController,
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { AcademyService } from 'src/app/services/academy.service';
import { HttpService } from 'src/app/services/http.service';
import { OnboardingAcademyResultComponent } from '../onboarding-academy-result/onboarding-academy-result.component';
import { Keyboard } from '@capacitor/keyboard';
import { Router } from '@angular/router';
import { OnboardingFavoriteTrayComponent } from '../onboarding-favorite-tray/onboarding-favorite-tray.component';

@Component({
  standalone: true,
  selector: 'app-onboarding-step3',
  templateUrl: './onboarding-step3.component.html',
  styleUrls: ['./onboarding-step3.component.scss'],
  imports: [
    IonSearchbar,
    IonButton,
    IonIcon,
    IonLabel,
    IonSelect,
    IonSelectOption,
    StepProgressComponent,
    NgFor,
    NgIf,
    ReactiveFormsModule,
    OnboardingAcademyResultComponent,
    FormsModule,
    OnboardingFavoriteTrayComponent,
  ],
})
export class OnboardingStep3Component implements OnInit {
  searchByList: any[] = [
    { label: 'City/State', value: 'location' },
    { label: 'Academy Name', value: 'name' },
  ];
  selectedValue: string = '';
  searchResultItems: any[] = [];
  searchTerm: string = '';
  selectedAcademyList: Map<number, any> = new Map<number, any>();
  selectedItems: any[] = [];
  @ViewChild('searchBar') searchBar: any;
  constructor(
    public academyService: AcademyService,
    public router: Router,
    public modalController: ModalController
  ) {}
  location: Location = inject(Location);

  ngOnInit() {}
  keyDown(ev: KeyboardEvent) {
    if (ev.key == 'Enter') {
      // hide keyboard
      Keyboard.hide().then(() => {
        // keyboard hidden , do something
      });
    }
  }

  search(ev: any) {
    console.log(ev.detail.value);
    // this.searchOffset = 0;
    if (!ev.detail.value) {
      this.searchTerm = '';
      this.searchResultItems = [];
      return false;
    }
    this.searchTerm = ev.detail.value;
    this.performSearch();
    return;
  }

  performSearch() {
    this.searchTerm = this.searchTerm.trim();
    if (!this.searchTerm || this.searchTerm.length < 3) return;
    this.academyService.searchAcademy(this.searchTerm).subscribe((res: any) => {
      this.searchResultItems = res;
    });
  }
  selectedAcademies(value: Map<number, any>) {
    this.selectedAcademyList = value;
    this.selectedItems = [...this.selectedAcademyList.values()];
  }

  proceedToPayments() {
    this.router.navigateByUrl('/onboarding-step4');
  }

  dismiss() {
    this.location.back();
  }
}
