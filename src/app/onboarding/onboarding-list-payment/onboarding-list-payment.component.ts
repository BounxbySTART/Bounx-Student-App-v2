import { Component, OnInit } from '@angular/core';
import { Stripe } from '@capacitor-community/stripe';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-onboarding-list-payment',
  templateUrl: './onboarding-list-payment.component.html',
  styleUrls: ['./onboarding-list-payment.component.scss'],
  imports: [IonList, IonItem, IonAvatar, IonLabel, IonIcon, IonButton],
})
export class OnboardingListPaymentComponent implements OnInit {
  constructor(public playerService: PlayerService) {
    Stripe.initialize({
      publishableKey: environment.stripePublishableKey,
    });
  }

  //  client_secret, ephemeralKey
  ngOnInit() {}
  startSetupIntent() {
    this.playerService.setupIntent({}).subscribe((res: any) => {
      console.log(res);
      this.presentSheet(res.client_secret, res.customerId, res.ephemeralKey);
    });
  }

  async presentSheet(
    paymentIntentClientSecret: string,
    customerId: string,
    ephemeralKey: string
  ) {
    // prepare PaymentSheet with CreatePaymentSheetOption.
    await Stripe.createPaymentSheet({
      paymentIntentClientSecret: paymentIntentClientSecret,
      customerId: customerId,
      customerEphemeralKeySecret: ephemeralKey,
    });
    const result = await Stripe.presentPaymentSheet();
  }
}
