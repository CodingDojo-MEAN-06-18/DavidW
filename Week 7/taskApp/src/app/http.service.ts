import { Injectable } from '@angular/core';
import { Task } from './task';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    tasks: BehaviorSubject <any[]> = new BehaviorSubject([]);
    editTask: BehaviorSubject <any[]> = new BehaviorSubject([]);
    TasktoEdit = [];
    
    constructor(private _http: HttpClient) {
        this.getTasks();
    }
   
    getTasks(){
        // console.log('********************************************in the getTasks method' )
        this._http.get('/tasks').subscribe((tasks: any[]) => {
            this.tasks.next(tasks);
            // console.log("Got our tasks!", tasks)
        });
    }
    
    showTasks(taskId): any {
        // console.log('********************************************in the showTasks method' )
        this._http.get('/tasks/show/' + taskId).subscribe((tasks: any[]) => {
            this.editTask.next(tasks);
        });
    }
    
    addTasks(newTask: any){
        // console.log('********************************************in the addTasks method' )
        this._http.post('/tasks', newTask).subscribe(
            (response) => { 
                this.getTasks(); 
                console.log("Adding tasks!", response);
            }
        );
    }
        
    updateTasks(taskId, task){
        // console.log('********************************************in the updateTasks method' )
        // console.log("updatating tasks with id..." + taskId)
        // console.log("task.........................................." + task.title)
        
        this._http.put('tasks/edit/' + taskId, task).subscribe(
            (response) => { 
                this.getTasks(); 
                // console.log("Updating tasks end!", response);
        });
    }

    // gets taskId from task-list component that called the method through http service
    deleteTasks(taskId) {
        // console.log('********************************************in the deleteTasks method' )
        this._http.delete('/tasks/destroy/' + taskId).subscribe((tasks: any[]) => {
            this.getTasks(); // goes and gets the new updated task list
        });
    }
}
