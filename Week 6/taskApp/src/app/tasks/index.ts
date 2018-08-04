import { TaskNewComponent } from './task-new/task-new.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { HomeComponent } from './home/home.component';
import { TaskEditComponent } from '../tasks/task-list/task-edit/task-edit.component';


export const components: any[] = [
  TaskNewComponent,
  TaskListComponent,
  TaskDetailsComponent,
  TaskEditComponent,
  HomeComponent,
];

export * from './task-details/task-details.component';
export * from './task-list/task-edit/task-edit.component';
export * from './task-list/task-list.component';
export * from './task-new/task-new.component';
export * from './home/home.component';