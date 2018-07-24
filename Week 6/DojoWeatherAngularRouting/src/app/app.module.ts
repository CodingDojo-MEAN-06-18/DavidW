import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityDataService } from './city-data.service'

import { routing } from './app-routing.module'; // <--- Routing rules imported
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonDCComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing // <--- Our routing rules
  ],
  providers: [CityDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
