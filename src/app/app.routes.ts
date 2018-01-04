import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './ui/user/user.component';

export const appRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    outlet: 'popup'
  }
]
