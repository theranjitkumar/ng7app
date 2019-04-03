import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: 'public', redirectTo: 'public/posts', pathMatch: 'full' },
  {
    path: 'public', component: PublicComponent,
    children: [
      { path: 'posts', component: PostsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
