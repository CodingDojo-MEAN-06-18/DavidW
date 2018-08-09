import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    user = new User();
    registrationErrors: string[] = [];
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {}

    onSubmit(value: User) {
        this.userService.register(value).subscribe(user => {
        this.router.navigateByUrl('browse');
    });
  }
}