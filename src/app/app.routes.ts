import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    outlet: 'popup'
  }
]
