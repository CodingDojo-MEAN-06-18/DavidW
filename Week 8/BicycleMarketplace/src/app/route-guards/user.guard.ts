import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../services'
// can i use thise instead since i have the index? 
// import { UserService } from '../services/????'

@Injectable()

export class UserGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    // 
    canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): boolean {
        const isLoggedIn = this.userService.isLoggedIn();

        // if the user is not logged in then route them back to the root route.
        if (!isLoggedIn) {
            this.router.navigate(['/']);
        }
        return isLoggedIn;
    }
}
