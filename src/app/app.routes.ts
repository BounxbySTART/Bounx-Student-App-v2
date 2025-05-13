import { Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in/log-in-form/log-in-form.component';
import { OnboardingStep1Component } from './onboarding/onboarding-step1/onboarding-step1.component';
import { OnboardingStep2Component } from './onboarding/onboarding-step2/onboarding-step2.component';
import { VerifyFormComponent } from './verify-code/verify-form/verify-form.component';
import { OnboardingAddProfileComponent } from './onboarding/onboarding-add-profile/onboarding-add-profile.component';
import { OnboardingListProfileComponent } from './onboarding/onboarding-list-profile/onboarding-list-profile.component';
import { ResetPassFormStep1Component } from './reset-password/reset-pass-form-step1/reset-pass-form-step1.component';
import { ResetPassFormStep2Component } from './reset-password/reset-pass-form-step2/reset-pass-form-step2.component';
import { SignUpSuccessComponent } from './sign-up/sign-up-success/sign-up-success.component';
import { Tab3Page } from './tab3/tab3.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { TabsPage } from './tabs/tabs.page';
import { ResetPassSuccessComponent } from './reset-password/reset-pass-success/reset-pass-success.component';
import { IntroContentComponent } from './intro/intro-content/intro-content.component';
import { OnboardingStartComponent } from './onboarding/onboarding-start/onboarding-start.component';
import { OnboardingStep3Component } from './onboarding/onboarding-step3/onboarding-step3.component';
import { OnboardingStep4Component } from './onboarding/onboarding-step4/onboarding-step4.component';
import { OnboardingCompletedComponent } from './onboarding/onboarding-completed/onboarding-completed.component';
import { PStudentComponent } from './profile/p-student/p-student.component';
import { EditPersonalDeteFormComponent } from './profile/edit-personal-dete-form/edit-personal-dete-form.component';
import { EditContactFormComponent } from './profile/edit-contact-form/edit-contact-form.component';
import { OtherProfilesComponent } from './profile/other-profiles/other-profiles.component';
import { PgBadgesComponent } from './profile/pg-badges/pg-badges.component';
import { BadgeDetailsComponent } from './profile/badge-details/badge-details.component';
import { PAcademyComponent } from './profile/p-academy/p-academy.component';
import { PCoachComponent } from './profile/p-coach/p-coach.component';
import { AcademyLocationSelectComponent } from './profile/academy-location-select/academy-location-select.component';
import { AcademyBookingsFilterComponent } from './profile/academy-bookings-filter/academy-bookings-filter.component';
import { AcademyPicsComponent } from './profile/academy-pics/academy-pics.component';
import { AcademyPicsGalleryComponent } from './profile/academy-pics-gallery/academy-pics-gallery.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/app-intro-content',
    pathMatch: 'full',
  },
  /*  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  }, */
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: Tab1Page,
      },
      {
        path: 'tab2',
        component: Tab2Page,
      },
      {
        path: 'tab3',
        component: Tab3Page,
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'sign-up',
    component: SignUpFormComponent,
  },
  {
    path: 'log-in',
    component: LogInFormComponent,
  },
  {
    path: 'onboarding-start',
    component: OnboardingStartComponent,
  },
  {
    path: 'onboarding-step1',
    component: OnboardingStep1Component,
  },
  {
    path: 'onboarding-step2',
    component: OnboardingStep2Component,
  },
  {
    path: 'onboarding-step3',
    component: OnboardingStep3Component,
  },
  {
    path: 'onboarding-step4',
    component: OnboardingStep4Component,
  },
  {
    path:'onboarding-complete',
    component:OnboardingCompletedComponent
  },
  {
    path: 'app-verify-form',
    component: VerifyFormComponent,
  },
  {
    path: 'list-profile',
    component: OnboardingListProfileComponent,
  },
  {
    path: 'add-profile',
    component: OnboardingAddProfileComponent,
  },
  {
    path: 'app-reset-pass-form-step1',
    component: ResetPassFormStep1Component,
  },
  {
    path: 'app-reset-pass-form-step2',
    component: ResetPassFormStep2Component,
  },
  {
    path: 'app-reset-pass-success',
    component: ResetPassSuccessComponent,
  },
  {
    path: 'app-sign-up-success',
    component: SignUpSuccessComponent,
  },
  {
    path: 'app-intro-content',
    component: IntroContentComponent,
  },
  {
    path: 'p-student',
    component: PStudentComponent,
  },
  {
    path: 'p-academy',
    component: PAcademyComponent,
  },
  {
    path: 'p-coach',
    component: PCoachComponent,
  },
  {
    path: 'edit-personal-details',
    component: EditPersonalDeteFormComponent,
  },
  {
    path: 'edit-contact-details',
    component: EditContactFormComponent,
  },
  {
    path: 'other-profiles',
    component: OtherProfilesComponent,
  },
  {
    path: 'all-badges',
    component: PgBadgesComponent,
  },
  {
    path: 'badge-details',
    component: BadgeDetailsComponent,
  },
  {
    path: 'academy-location-select',
    component: AcademyLocationSelectComponent,
  },
  {
    path: 'academy-bookings-filter',
    component: AcademyBookingsFilterComponent,
  },
  {
    path: 'academy-pics-gallery',
    component: AcademyPicsGalleryComponent,
  }
];
