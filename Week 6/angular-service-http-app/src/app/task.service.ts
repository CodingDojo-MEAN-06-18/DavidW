import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { 
    this.retrieveTasks();
  }

  retrieveTasks() {
    let x = this._http.get('http://5b53abe1b7512a0014b93030.mockapi.io/:task').subscribe( 
      (task: any[]) => { this.tasks.next(task) }
    );
    console.log("x: " + x);
  }
  addTask(newTask: any) {
    let y = this._http.post('http://5b53abe1b7512a0014b93030.mockapi.io/:task', newTask).subscribe( 
      (response) => {this.retrieveTasks(); }
    );
    console.log("y: " + y);
  }

  updateData(newData: any): void{
    const tempData = this.tasks.getValue();
    tempData.push(newData); 
    this.tasks.next(tempData);
  }
}
