import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';

import { AccountModule } from './modules/account/account.module';
import { PrivateModule } from './modules/private/private.module';
import { PublicModule } from './modules/public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AccountModule,
    PrivateModule,
    PublicModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
