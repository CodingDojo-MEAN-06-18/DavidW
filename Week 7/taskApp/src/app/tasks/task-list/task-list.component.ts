import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { HttpService } from '../../http.service';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  selectedTask: Task;
  tasks: Array<Task>= [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.tasks.subscribe(
      (tasks) => { this.tasks = tasks; }
    );
  }

  onSelect(task: Task) {
    // console.log('selecting ', task);
    this.selectedTask = this.selectedTask === task ? null : task;
  }
  onDelete(event, task) {
    event.preventDefault();
    // console.log('deleting....', task._id);
    this._httpService.deleteTasks(task._id);
  }
  turnEditFunctionOn(test_id){
    console.log("trying to find the test id.....", test_id)
  }
}