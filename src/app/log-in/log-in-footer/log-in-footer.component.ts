import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-footer',
  templateUrl: './log-in-footer.component.html',
  styleUrls: ['./log-in-footer.component.scss'],
})
export class LogInFooterComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  reDirectToSignUpPage(){
    this.router.navigateByUrl('/sign-up');
  }

}
