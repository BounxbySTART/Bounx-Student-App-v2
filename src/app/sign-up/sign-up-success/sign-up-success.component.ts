import { Component, OnInit } from '@angular/core';
import { IonButton,IonContent } from '@ionic/angular/standalone';
import { SignUpSuccessFooterComponent } from '../sign-up-success-footer/sign-up-success-footer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-success',
  templateUrl: './sign-up-success.component.html',
  styleUrls: ['./sign-up-success.component.scss'],
  imports: [IonButton,IonContent, SignUpSuccessFooterComponent],
})
export class SignUpSuccessComponent implements OnInit {
  retryTimer: number = 8;

  constructor(private router:Router) {
   
  }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.retryTimer = 8;
    let timeInterval = setInterval(() => {
      this.retryTimer--;
      if (this.retryTimer <= 0) {
        clearInterval(timeInterval);
        this.router.navigateByUrl('/tabs/tab1');
       
      }
    }, 1000);
  }
}
