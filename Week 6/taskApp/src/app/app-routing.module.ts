import { Routes, RouterModule } from '@angular/router';
import { TaskNewComponent } from './tasks/task-new/task-new.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskEditComponent } from './tasks/task-list/task-edit/task-edit.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './tasks/home/home.component';

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
    path: 'tasks', 
    component: TaskListComponent
  },
  {
    path: 'tasks/edit/:id',
    component: TaskEditComponent 
  },
  {
    path: 'tasks/show/:id',
    component: TaskEditComponent 
  },
  {
    path: 'tasks/destroy/:id',
    component: TaskListComponent
  },


  { path: 'tasks/new', component: TaskNewComponent },
];

export const routing = RouterModule.forRoot(routes);

