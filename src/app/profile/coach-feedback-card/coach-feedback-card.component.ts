import { Component, Input, OnInit } from '@angular/core';
import { IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-coach-feedback-card',
  templateUrl: './coach-feedback-card.component.html',
  styleUrls: ['./coach-feedback-card.component.scss'],
  imports: [IonItem]
})
export class CoachFeedbackCardComponent  implements OnInit {
  @Input() profileId: number | undefined;
  @Input() studentProfile: any;

  constructor() { }

  ngOnInit() {}

}
