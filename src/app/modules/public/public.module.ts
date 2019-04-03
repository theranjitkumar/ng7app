import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [PublicComponent, PostsComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
