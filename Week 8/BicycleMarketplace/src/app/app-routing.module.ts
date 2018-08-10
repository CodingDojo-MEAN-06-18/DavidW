import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { UserGuard } from './route-guards/user.guard';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'browse',
        component: BrowseComponent,
        canActivate: [UserGuard]
    },
    {
        path: 'listings',
        component: ListingsComponent,
        canActivate: [UserGuard]
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
// export const routing = RouterModule.forRoot(routes);
