///<reference path="user.route.ts"/>
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {userRoutes} from './user.route';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [],
  providers: []
})

export class UserModule {
}
