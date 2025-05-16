import { NgClass, NgComponentOutlet, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from 'src/types/tabs-in-player-profile';
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss'],
  imports: [
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    NgComponentOutlet,
  ],
})
export class ContentTabsComponent implements OnInit {
  atPresentTab: number = 0;
  @Input('tabs') tabs!: Tab[];
  constructor() {}

  ngOnInit() {}
}
