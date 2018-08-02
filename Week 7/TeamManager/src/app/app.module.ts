import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components (you can barrel these)
import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManagePlayerStatusComponent } from './manage-player-status/manage-player-status.component';
import { ListComponent } from './manage-players/list/list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { Game1Component } from './manage-player-status/game1/game1.component';
import { Game2Component } from './manage-player-status/game2/game2.component';
import { Game3Component } from './manage-player-status/game3/game3.component';

// routing and services 
import { routing } from './app-routing.module'; // <--- Routing rules imported
import { HttpClientModule } from '@angular/common/http'; //import http client module
import { HttpService} from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    ManagePlayerStatusComponent,
    ListComponent,
    AddPlayerComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
