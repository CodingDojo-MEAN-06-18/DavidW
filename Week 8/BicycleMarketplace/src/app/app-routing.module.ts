import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'browse',
        component: BrowseComponent,
    },
    {
        path: 'listings',
        component: ListingsComponent
    }
]
export const routing = RouterModule.forRoot(routes);
