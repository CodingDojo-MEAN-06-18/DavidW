import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User} from './user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Bicycle Marketplace';
    navSwitch = new BehaviorSubject(false); 

    constructor(private router: Router, private userService: UserService){}

    ngOnInit(){
        this.userService.serviceSwitch.subscribe(
            (serviceSwitch) => {
                // console.log('what is the service switch ', serviceSwitch)
            this.navSwitch.next(serviceSwitch); 
        })
      }

    logOut(){
        console.log("logging out")
        this.router.navigate(['/'])
    }
}

