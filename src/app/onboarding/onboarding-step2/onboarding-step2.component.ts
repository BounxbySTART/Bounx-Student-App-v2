import { Component, OnInit, inject } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import {
  IonIcon,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonButton,
} from '@ionic/angular/standalone';
import { StepProgressComponent } from 'src/app/general/step-progress/step-progress.component';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserService } from 'src/app/services/user.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

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
  profileId!: number;
  navController: NavController = inject(NavController);
  profileImage: string = '../../assets/dummy/profile_pic_user/Ryan.png';
  constructor(
    public userService: UserService,
    public playerService: PlayerService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.profileId = this.userService.currentProfile.id;
  }
  proceedToClubSelection() {
    this.uploadImageFile();

    this.navController.navigateForward('/onboarding-step3');
  }

  goToPreviousPage() {
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

  async uploadImageFile() {
    const response = await fetch(this.profileImage);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });

    this.playerService
      .studentProfilePictureUpload(this.profileId, file)
      .subscribe((res) => {
        console.log(res);
      });
  }

  async dismiss() {
    const alert = await this.alertController.create({
      header: 'Cancel Profile creation?',
      message: `Your data will not be saved and profile will not be created if you cancel sign up process now`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // nothing to do
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            //something to do
            if (this.profileId) {
              this.playerService
                .playerProfileRemove(this.profileId)
                .subscribe((res) => {
                  console.log(res);
                });
            }
            this.router.navigateByUrl('/onboarding-complete');
          },
        },
      ],
    });

    await alert.present();
  }
}
