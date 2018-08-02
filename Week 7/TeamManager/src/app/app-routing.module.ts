import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { ListComponent } from './manage-players/list/list.component';
import { ManagePlayerStatusComponent } from './manage-player-status/manage-player-status.component';
import { Game1Component } from './manage-player-status/game1/game1.component';
import { Game2Component } from './manage-player-status/game2/game2.component';
import { Game3Component } from './manage-player-status/game3/game3.component';

const routes: Routes = [
  {
      path: '', 
      redirectTo: 'players', 
      pathMatch: 'full'
  },
  {
      path: 'players',
      component: ManagePlayersComponent,
      children: [
          {
              path: '',
              pathMatch: 'prefix', 
              redirectTo: 'list',
          },
          {
              path: 'list',
              component: ListComponent,
          },
          {
              path: 'addPlayer',
              component: AddPlayerComponent,
          }
      ]
  },
  {
      path: 'status/game',
      component: ManagePlayerStatusComponent,
      children: [
          {
              path: '',
              pathMatch: 'prefix', 
              redirectTo: '1',
          },
          {
              path: '1',
              component: Game1Component,
          },
          {
              path: '2',
              component: Game2Component,
          },
          {
              path: '3',
              component: Game3Component,
          }
      ]
  },
  
];

export const routing = RouterModule.forRoot(routes);