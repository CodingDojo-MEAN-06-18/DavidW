import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
    loginSwitch: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() { }
    
    switchingLogin(boolean){
        this.loginSwitch.next(!boolean) 
    }
}
