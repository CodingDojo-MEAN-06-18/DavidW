import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankingsComponent,
    HomeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
