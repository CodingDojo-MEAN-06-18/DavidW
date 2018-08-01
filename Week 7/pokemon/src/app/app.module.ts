import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayPokemonComponent } from './display-pokemon/display-pokemon.component';
import { HttpService } from "./http.service"

@NgModule({
  declarations: [
    AppComponent,
    DisplayPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
