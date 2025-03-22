import { Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in/log-in-form/log-in-form.component';
import { OnboardingStep1Component } from './onboarding/onboarding-step1/onboarding-step1.component';
import { OnboardingStep2Component } from './onboarding/onboarding-step2/onboarding-step2.component';
import { VerifyFormComponent } from './verify-code/verify-form/verify-form.component';
import { OnboardingAddProfileComponent } from './onboarding/onboarding-add-profile/onboarding-add-profile.component';
import { OnboardingListProfileComponent } from './onboarding/onboarding-list-profile/onboarding-list-profile.component';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
      path: 'sign-up',
      component: SignUpFormComponent
    },
    {
        path: 'log-in',
        component: LogInFormComponent
      },
      {
        path: 'onboarding-step1',
        component: OnboardingStep1Component
      },
      {
        path: 'onboarding-step2',
        component: OnboardingStep2Component
      },
      {
        path:'app-verify-form',
        component:VerifyFormComponent},
        {
        path: 'list-profile',
        component: OnboardingListProfileComponent
      },
      {
        path: 'add-profile',
        component: OnboardingAddProfileComponent
      }

  ];