import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { AcademyService } from 'src/app/services/academy.service';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-onboarding-academy-result',
  templateUrl: './onboarding-academy-result.component.html',
  styleUrls: ['./onboarding-academy-result.component.scss'],
  imports: [IonList, IonItem, IonAvatar, IonIcon, IonLabel, IonButton, NgFor],
})
export class OnboardingAcademyResultComponent implements OnInit {
  @Input() searchTextResults: any[] | undefined;
  profileId!: number;
  isFavourite: boolean = false;
  @Input() selectedIds: Map<number, any> = new Map();
  @Input() isSelectedView = false;
  @Output() selectedAcademies: EventEmitter<Map<number, any>> =
    new EventEmitter<Map<number, any>>();

  constructor(
    public academyService: AcademyService,
    public userService: UserService,
    public playerService: PlayerService
  ) {
    // console.log(this.searchText);
  }
  ngOnInit() {}
  //  @Body('profileId') profileId: number,
  // @Body('locationId') locationId: number,

  ngOnChanges() {
    if (this.isSelectedView) {
      this.searchTextResults?.forEach((i) => {
        this.selectedIds.set(i.id, i);
      });
    }
  }
  toggleToFavorites(search: any) {
    /*  console.log(search.id);
   this.profileId = this.userService.currentProfile.id;
   console.log(this.profileId);
   this.playerService.studentFavLocationDetail({profileId:this.profileId,locationId:search.id}).subscribe((res)=>{
    console.log(res);
    this.isFavourite=true;
   })
    */
    if (this.isSelectedView) {
      this.selectedIds.delete(search.id);
    } else {
      if (this.selectedIds.has(search.id)) {
        this.selectedIds.delete(search.id);
      } else {
        this.selectedIds.set(search.id, search);
      }
    }

    this.selectedAcademies.emit(this.selectedIds);
  }
}
