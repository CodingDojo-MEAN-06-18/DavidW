import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user = new User();
    users = [];

    constructor() { }

    ngOnInit() {
    }
  
    onSubmit(event, formData: NgForm){
      event.preventDefault();
      this.users.push(this.user);
      this.user = new User();
      console.log(this.users);
    }
    // looped = this.users;
  }