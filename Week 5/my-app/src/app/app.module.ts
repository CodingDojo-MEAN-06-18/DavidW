import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
