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
    serviceSwitch: BehaviorSubject<boolean> = new BehaviorSubject(false);

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
    isAuthed(): boolean {
        return true;
        // const expired = parseInt(this.cookieService.get('expiration'), 10);
        // const userID = this.cookieService.get('userID');
        
        // const session = this.cookieService.get('session');
        
        // return session && expired && userID && expired > Date.now();
    }

    // this turns the nav bar on and should be switched back to off once we figure out logout
    flipSwitch(){
        console.log('flipping switch and serviceSwitch = ', this.serviceSwitch )
        return this.serviceSwitch.next(true);
    }

    // should log out user.....
    logout() {
        return this.http.delete(`${this.baseUrl}/logout`);
    }
}