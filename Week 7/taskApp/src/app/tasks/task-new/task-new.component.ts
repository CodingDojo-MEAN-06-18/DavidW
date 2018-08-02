import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task: Task = new Task();

  @Output() newTask = new EventEmitter<Task>();
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ', this.task);

    this.newTask.emit(this.task);
    this._httpService.addTasks(this.task)

    this.router.navigateByUrl('tasks');



    this.task = new Task();

    form.reset();
  }
}