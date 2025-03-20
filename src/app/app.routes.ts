import { Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
      path: 'sign-up',
      component: SignUpFormComponent
    }
  ];