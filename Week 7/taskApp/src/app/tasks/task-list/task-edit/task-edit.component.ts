import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../../models/task';
import { HttpService } from '../../../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
    tasks = [];
    task: Task = new Task();
    editTask: Array<Task>= [];
    
    @Output() newTask = new EventEmitter<Task>();

    constructor(private activeRoute: ActivatedRoute, private _httpService: HttpService) { }
    
    ngOnInit() {
        this.activeRoute.params.subscribe(
            (params) => {
                // console.log("in the task-edit, params.id = " + params.id);
                this._httpService.showTasks(params.id)
                // this.tasks.push(this._httpService.showTasks(params.id));
            }
        );
        this._httpService.editTask.subscribe(
            (tasks) => { 
                this.editTask = tasks; 
                // console.log("back in task edit....", tasks);
                // console.log(this.editTask)
            }
        );
    }
    // was a working event update but didnt actuallly update....

    // onSubmit(event: Event, form: NgForm, id) {
    //     event.preventDefault();
    //     console.log('attempting to edit');
    //     console.log('submitting ', form);    
    //     this._httpService.updateTasks(id, form)
    //     form.reset();
    //   }

    onSubmit(event: Event, form: NgForm, editTask) {
        event.preventDefault();
        // if nothing was edited then change the form to have the editTask title
        if(this.task.title === undefined) {
            this.task.title = editTask.title;
        }
        // if nothing was edited then change the form to have the editTask description
        if(this.task.description === undefined) {
            this.task.description = editTask.description;
        }
        // if nothing was edited then change the form to have the editTask completed
        if(this.task.completed === undefined) {
            this.task.completed = editTask.completed;
        }
        // uses the http service update tasks and sends the updated task with the old editTask id we had selcted to edit
        this._httpService.updateTasks(editTask._id, this.task);
        // creates a new task
        this.task = new Task();

        // this is where we should somehow redirect
        // or switch a boolean to turn on and make the tasks show back up
    }
}