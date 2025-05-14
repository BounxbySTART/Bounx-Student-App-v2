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
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { PlayerService } from 'src/app/services/player.service';

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
  profileId!: number;
  selectedValue: string = '';
  searchResultItems: any[] = [];
  searchTerm: string = '';
  selectedAcademyList: Map<number, any> = new Map<number, any>();
  selectedItems: any[] = [];
  @ViewChild('searchBar') searchBar: any;
  constructor(
    private academyService: AcademyService,
    private router: Router,
    private modalController: ModalController,
    private alertController: AlertController,
    private userService: UserService,
    private playerService:PlayerService
  ) {}
  location: Location = inject(Location);

  ngOnInit() {
    this.profileId = this.userService.currentProfile.id;
  }
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

  async dismiss() {
    const alert = await this.alertController.create({
      header: 'Cancel Profile creation?',
      message: `Your data will not be saved and profile will not be created if you cancel sign up process now`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // nothing to do
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            //something to do
            if (this.profileId) {
              this.playerService
                .playerProfileRemove(this.profileId)
                .subscribe((res) => {
                  console.log(res);
                });
            }
            this.router.navigateByUrl('/onboarding-complete');
          },
        },
      ],
    });

    await alert.present();
  }

  goToPreviousPage() {
    this.location.back();
  }
}
