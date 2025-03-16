import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { IntroContentComponent } from '../intro/intro-content/intro-content.component';
import { IntroSlideshowComponent } from '../intro/intro-slideshow/intro-slideshow.component';
import { IntroFooterComponent } from '../intro/intro-footer/intro-footer.component';

import { HeaderFormPageComponent } from '../general/header-form-page/header-form-page.component';
import { HeaderInnerPageComponent } from '../general/header-inner-page/header-inner-page.component';
import { StepProgressComponent } from '../general/step-progress/step-progress.component';

import { SignUpFormComponent } from '../sign-up/sign-up-form/sign-up-form.component';
import { SignUpFooterComponent } from '../sign-up/sign-up-footer/sign-up-footer.component';
import { SignUpSuccessComponent } from '../sign-up/sign-up-success/sign-up-success.component';
import { SignUpSuccessFooterComponent } from '../sign-up/sign-up-success-footer/sign-up-success-footer.component';

import { LogInFormComponent } from '../log-in/log-in-form/log-in-form.component';
import { LogInFooterComponent } from '../log-in/log-in-footer/log-in-footer.component';

import { ResetPassFormStep1Component } from '../reset-password/reset-pass-form-step1/reset-pass-form-step1.component';
import { ResetPassFormStep2Component } from '../reset-password/reset-pass-form-step2/reset-pass-form-step2.component';
import { ResetPassSuccessComponent } from '../reset-password/reset-pass-success/reset-pass-success.component';
import { ResetPassFooterComponent } from '../reset-password/reset-pass-footer/reset-pass-footer.component';

import { VerifyFormComponent} from '../verify-code/verify-form/verify-form.component';

import { OnboardingStartComponent } from '../onboarding/onboarding-start/onboarding-start.component';
import { OnboardingCompletedComponent } from '../onboarding/onboarding-completed/onboarding-completed.component';
import { OnboardingAddProfileComponent } from '../onboarding/onboarding-add-profile/onboarding-add-profile.component';
import { OnboardingStep1Component } from '../onboarding/onboarding-step1/onboarding-step1.component';
import { OnboardingStep2Component } from '../onboarding/onboarding-step2/onboarding-step2.component';
import { OnboardingStep3Component } from '../onboarding/onboarding-step3/onboarding-step3.component';
import { OnboardingStep4Component } from '../onboarding/onboarding-step4/onboarding-step4.component';
import { OnboardingListProfileComponent } from '../onboarding/onboarding-list-profile/onboarding-list-profile.component';
import { OnboardingListPaymentComponent } from '../onboarding/onboarding-list-payment/onboarding-list-payment.component';
import { OnboardingAcademyResultComponent } from '../onboarding/onboarding-academy-result/onboarding-academy-result.component';
import { OnboardingFavoriteTrayComponent } from '../onboarding/onboarding-favorite-tray/onboarding-favorite-tray.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    IntroContentComponent,
    IntroSlideshowComponent,
    IntroFooterComponent,
    HeaderFormPageComponent,
    HeaderInnerPageComponent,
    StepProgressComponent,
    SignUpFormComponent,
    SignUpFooterComponent,
    SignUpSuccessComponent,
    SignUpSuccessFooterComponent,
    LogInFormComponent,
    LogInFooterComponent,
    ResetPassFormStep1Component,
    ResetPassFormStep2Component,
    ResetPassSuccessComponent,
    ResetPassFooterComponent,
    VerifyFormComponent,
    OnboardingStartComponent,
    OnboardingCompletedComponent,
    OnboardingAddProfileComponent,
    OnboardingStep1Component,
    OnboardingStep2Component,
    OnboardingStep3Component,
    OnboardingStep4Component,
    OnboardingListProfileComponent,
    OnboardingListPaymentComponent,
    OnboardingAcademyResultComponent,
    OnboardingFavoriteTrayComponent
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
