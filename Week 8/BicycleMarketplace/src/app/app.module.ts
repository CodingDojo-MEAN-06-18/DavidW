//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie-service';

//routing and services
import { routing } from './/app-routing.module';
import * as fromServices from './services';

// components
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RandomBikeComponent } from './home/random-bike/random-bike.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    ListingsComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    NavBarComponent,
    RandomBikeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    CookieModule.forRoot(),
  ],
  providers: [...fromServices.services, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }