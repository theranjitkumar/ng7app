import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './private.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AuthGuard } from '../../commons/guard/auth.guard';

const routes: Routes = [
  { path: 'private', redirectTo: 'private/dashboard', pathMatch: 'full' },
  {
    path: 'private', component: PrivateComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
