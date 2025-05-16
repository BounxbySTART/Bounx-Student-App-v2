import { Component, OnInit } from '@angular/core';
import { IonSelect, IonSelectOption } from "@ionic/angular/standalone";

@Component({
  selector: 'app-academy-header',
  templateUrl: './academy-header.component.html',
  styleUrls: ['./academy-header.component.scss'],
  imports: [
    IonSelect,
    IonSelectOption
  ],
})
export class AcademyHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
