import { Routes, RouterModule } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';
import { DisplayNotesComponent} from './display-notes/display-notes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: DisplayNotesComponent
  },
  { 
    path: 'home', 
    component: DisplayNotesComponent
  },
  { 
    path: 'tasks', 
    component: DisplayNotesComponent
  },
  {
    path: 'tasks/destroy/:id',
    component: DisplayNotesComponent
  },


  { path: 'tasks/new', component: NewNoteComponent },
];

export const routing = RouterModule.forRoot(routes);

