import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task: Task = new Task();

  @Output() newTask = new EventEmitter<Task>();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ', this.task);

    this.newTask.emit(this.task);
    this._httpService.addTasks(this.task)
    this.task = new Task();

    form.reset();
  }
}