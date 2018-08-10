import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logOff(event: Event){
    event.preventDefault();    
    this.userService.logout().subscribe(user => {
        this.userService.isLoggedIn()
        this.router.navigateByUrl('home');
        });
    }

}
