import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';

import { AuthGuard } from '../../commons/guard/auth.guard';

const routes: Routes = [
  { path: 'account', redirectTo: 'account/login', pathMatch: 'full' },
  {
    path: 'account', component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'passwordreset', component: PasswordresetComponent, canActivate: [AuthGuard]  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
