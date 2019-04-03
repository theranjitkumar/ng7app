import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';


@NgModule({
  declarations: [AccountComponent, LoginComponent, SignupComponent, PasswordresetComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
