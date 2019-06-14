import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from '../environments/environment';
import { CheckUserInterseptor } from './shared/interseptors/check-user.interseptor';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.apiUrl],
        blacklistedRoutes: [environment.apiUrl + '/auth/login']
      }
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CheckUserInterseptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
