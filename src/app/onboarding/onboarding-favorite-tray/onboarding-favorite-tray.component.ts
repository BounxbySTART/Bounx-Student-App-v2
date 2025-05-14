import { KeyValuePipe, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { OnboardingAcademyResultComponent } from '../onboarding-academy-result/onboarding-academy-result.component';
import { Router, RouterLink } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-onboarding-favorite-tray',
  templateUrl: './onboarding-favorite-tray.component.html',
  styleUrls: ['./onboarding-favorite-tray.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonButton,
    NgClass,
    KeyValuePipe,
    OnboardingAcademyResultComponent,
    RouterLink,
  ],
})
export class OnboardingFavoriteTrayComponent implements OnChanges {
  expanded: boolean = false;
  @Input('selectedAcademyList') selectedAcademyList: Map<number, any> = new Map<
    number,
    any
  >();
  searchTextResults: any[] = [];
  @Output() selectedAcademies: EventEmitter<Map<number, any>> =
    new EventEmitter<Map<number, any>>();
  constructor(
    private router: Router,
    private playerService: PlayerService,
    private userService: UserService
  ) {}

  ngOnChanges() {
    this.convertSearchItems();
  }
  convertSearchItems() {
    console.log('converting');

    if (this.selectedAcademyList.size > 0) {
      this.searchTextResults = [];
      this.selectedAcademyList.forEach((val, key) => {
        this.searchTextResults.push(val);
      });
    }
  }
  selectedAcademiesEvent(value: Map<number, any>) {
    this.selectedAcademyList = value;
    this.selectedAcademies.emit(this.selectedAcademyList);
    this.convertSearchItems();
  }

  saveFavProfiles() {
    const locationIds = [...this.selectedAcademyList.keys()];
    this.playerService
      .studentFavLocationDetail({
        profileId: this.userService.currentProfile.id,
        locationIds,
      })
      .subscribe(() => {});
    this.router.navigateByUrl('/onboarding-step4');
  }
}
