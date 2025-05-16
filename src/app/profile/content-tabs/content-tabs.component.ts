import { NgClass,NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from 'src/types/tabs-in-player-profile';
import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from "@ionic/angular/standalone";


@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss'],
  imports:[NgClass,NgFor,IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView],
})
export class ContentTabsComponent  implements OnInit {

  atPresentTab:number=0; 
  @Input('tabs') tabs!:Tab[];
  @Output('onTabChange') tabChangeEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  switchTo(i:number){
    this.atPresentTab = i;
    this.tabChangeEvent.emit(this.tabs[i].name);
  }

}
