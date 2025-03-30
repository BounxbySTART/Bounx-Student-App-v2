import { Component, Input } from '@angular/core';
import { IonInput, IonIcon } from '@ionic/angular/standalone';
@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
  imports: [IonInput, IonIcon],
})
export class DropdownButtonComponent {
  @Input('label') label!: string;
  @Input('placeholder') placeholder: string = 'Select';
}
