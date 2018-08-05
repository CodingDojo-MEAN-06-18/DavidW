// modules and routing needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './/app-routing.module';
import { HttpService } from './http.service';

// components
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankingsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
