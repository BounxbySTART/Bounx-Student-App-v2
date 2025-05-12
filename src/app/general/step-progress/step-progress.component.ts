import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-progress',
  templateUrl: './step-progress.component.html',
  styleUrls: ['./step-progress.component.scss'],
})
export class StepProgressComponent implements OnInit {
@Input() step:number=1;
  constructor() { }

  ngOnInit() {}

}
