// everything commented out is hopefullly how we will get the switch button to work
// and subscribe or observe anytime the user is logged in our out so when they first 
// log in the routes pop up above the router and if they log out at anytime they go away and 
// the only thing displyed is back at the home page. probaly do a switch and an if statemnt if the user is
// logged in or not
// import { Component, OnChanges } from '@angular/core';
import { Component } from '@angular/core';
import { User} from './user';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Bicycle Marketplace';
    loginSwitch = false; 
    
    constructor(private http: HttpService){}

    //   if the user is not logged in redirect home, destroy cookies, empty sesssion etc
    // that code should be here as well

    //   ngOnChanges(){
    //     this.http.loginSwitch.subscribe(
    //         (loginSwitch) => {
    //         this.loginSwitch = loginSwitch; 
    //     })
    //   }

    switchButton(){
        console.log("switching and the switch is currently:" , this.loginSwitch)
        this.http.switchingLogin(this.loginSwitch);
        this.http.loginSwitch.subscribe(
            (loginSwitch) => {
                this.loginSwitch = loginSwitch; 
        })
        console.log("done switching and the switch is now:" , this.loginSwitch)
    }
}

