import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { User } from '../models';
import { Observable } from '../../../node_modules/rxjs';
import { BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private baseUrl = '/api/users';
    NavSwitch: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private http: HttpClient, private cookieService: CookieService) {}
  
    // login user
    login(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/login`, user);
    }

    // registers the new user
    register(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/register`, user);
    }

    // gets current user information based off userId passed from browse component of what was stored in cookies
    getUserInfo(userID){
        return this.http.get(`${this.baseUrl}/info/`+ userID);
    }
    
    // added from lecture
    isLoggedIn(): boolean {
        // return true;
        const expired = parseInt(this.cookieService.get('expiration'), 10);
        const userID = this.cookieService.get('userID');
        const session = this.cookieService.get('session');

        return Boolean(session && expired && userID && expired > Date.now());
    }

    // this turns the nav bar on and should be switched back to off once we figure out logout
    checkNavSwitch(){
        let test = this.isLoggedIn()
        if (test) {
            // console.log('You are logged in')
            this.NavSwitch.next(true);
        } else {
            // console.log('You are not logged in, please go to the home page and log in');
            this.NavSwitch.next(false);
        }
    }

    // should log out user.....
    logout() {
        return this.http.delete(`${this.baseUrl}/logout`);
    }
}