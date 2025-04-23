import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, IonButton,IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reset-pass-success',
  templateUrl: './reset-pass-success.component.html',
  styleUrls: ['./reset-pass-success.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonContent
  ],
})
export class ResetPassSuccessComponent  implements OnInit {
  retryTimer: number = 8;
  constructor(private router:Router) { }

  ngOnInit() {
    this.startTimer();
  }


  startTimer() {
    this.retryTimer = 8;
    let timeInterval = setInterval(() => {
      this.retryTimer--;
      if (this.retryTimer <= 0) {
        clearInterval(timeInterval);
        this.router.navigateByUrl('/log-in');
       
      }
    }, 1000);
  }

  proceedToLogin(){
    this.router.navigateByUrl('/log-in');
  }

}
