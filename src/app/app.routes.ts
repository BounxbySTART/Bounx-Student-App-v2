import { Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in/log-in-form/log-in-form.component';

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
      }
  ];