import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = "Registration";
  user = new User();
  users = [];

  onSubmit(event, formData: NgForm){
    event.preventDefault();
    this.users.push(this.user);
    this.user = new User();
    // console.log(this.users);
  }
  // looped = this.users;
}
