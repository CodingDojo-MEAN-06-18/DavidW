import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models';

import { UserService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = new User();
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {}

    onSubmit(value: User) {
        this.userService.login(value).subscribe(user => {
        this.router.navigateByUrl('browse');
        this.userService.checkNavSwitch();
        });
    }
}