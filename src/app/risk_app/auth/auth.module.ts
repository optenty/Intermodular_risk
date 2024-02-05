import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {LogoutPageComponent} from "./pages/logout-page/logout-page.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    LogoutPageComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class AuthModule { }
