import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './ui/user/user.component';
import {LoginComponent} from './ui/user/login/login.component';
import {RegisterComponent} from './ui/user/register/register.component';

export const appRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    outlet: 'popup'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]
