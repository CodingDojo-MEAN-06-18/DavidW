import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { AppRoutingModule } from './/app-routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
