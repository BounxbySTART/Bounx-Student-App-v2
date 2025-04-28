import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  IonIcon,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonButton,
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-onboarding-step2',
  templateUrl: './onboarding-step2.component.html',
  styleUrls: ['./onboarding-step2.component.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonButton,
    StepProgressComponent,
  ],
})
export class OnboardingStep2Component implements OnInit {
  navController: NavController = inject(NavController);
  profileImage: string = '../../assets/dummy/profile_pic_user/Ryan.png';
  constructor() {}

  ngOnInit() {}
  proceedToClubSelection() {
    this.navController.navigateForward('/onboarding-step3');
  }
  dismiss() {
    this.navController.pop();
  }
  async chooseImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      correctOrientation: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.webPath;

    if (imageUrl) {
      // Can be set to the src of an image now
      this.profileImage = imageUrl;
    }
  }
  async imageFromGallery() {
    const image = await Camera.pickImages({
      quality: 90,
      correctOrientation: true,
      limit: 1,
      width: 512,
      height: 512,
    });
    const imageUrl = image.photos[0].webPath;

    if (imageUrl) {
      // Can be set to the src of an image now
      this.profileImage = imageUrl;
    }
  }
}
