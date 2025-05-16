import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-footer',
  templateUrl: './sign-up-footer.component.html',
  styleUrls: ['./sign-up-footer.component.scss'],
  imports: [RouterLink],
})
export class SignUpFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
