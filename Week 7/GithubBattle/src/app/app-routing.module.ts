// imported modules and routes for completing our paths and loading defined components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        component: BattleComponent
    },
    {
        path: 'results',
        component: ResultsComponent,
    },
    {
        path: 'rankings',
        component: RankingsComponent
    }
]
export const routing = RouterModule.forRoot(routes);
