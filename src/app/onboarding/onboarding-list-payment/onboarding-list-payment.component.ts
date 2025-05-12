import { Component, OnInit } from '@angular/core';
import { PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe';
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
    }).then((res) => {
      console.log(res, 'Stripe init');
    });
  }

  //  client_secret, ephemeralKey
  ngOnInit() {}
  startSetupIntent() {
    this.playerService.setupIntent({}).subscribe((res: any) => {
      console.log(res);
      this.presentSheet(res.client_secret, res.customerId, res.ephemeralKey);
      this.intentListener(res.client_secret, res.customerId);
    });
  }
  intentListener(intentClientSecret: string, customerId: string) {
    Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
      console.log('PaymentSheetEventsEnum.Completed');
      // send intentClientSecret & customerId to backend
      this.completeIntent(intentClientSecret, customerId);
    });
  }
  completeIntent(intentClientSecret: string, customerId: string) {
    //do api call to server with  intentClientSecret & customerId
  }

  async presentSheet(
    setupIntentClientSecret: string,
    customerId: string,
    ephemeralKey: string
  ) {
    // prepare PaymentSheet with CreatePaymentSheetOption.
    await Stripe.createPaymentSheet({
      setupIntentClientSecret: setupIntentClientSecret,
      customerId: customerId,
      customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: 'BOUNX',
      style: 'alwaysLight',
      billingDetailsCollectionConfiguration: {
        address: 'never',
        name: 'automatic',
      },
    });
    const result = await Stripe.presentPaymentSheet();
  }
}
