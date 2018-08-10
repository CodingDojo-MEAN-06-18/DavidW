import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserService, BikeService } from '../services';
import { User } from '../models';
import { Bike } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
    users: object;
    currentUserListings
    otherUserListings
    currentBikes = []
    otherUsersBikes = []

    currentUserID = '';
    currentUserInfo;
    bikes = []
    BikesUserContactInfo = null;
    
    constructor( 
        private cookieService: CookieService, 
        private bikeService: BikeService,
        private userService: UserService, 
        private router: Router
    ) {}

    ngOnInit() {
        this.currentUserID = this.cookieService.get('userID')
        this.getCurrentUser(this.currentUserID);
        this.getBikes();
        this.userService.checkNavSwitch();
    }
  
    getCurrentUser(currentUserID){
        this.userService.getUserInfo(currentUserID).subscribe(user => {
            this.currentUserInfo = user
            });
    }

    getBikes(){
        this.bikeService.getBikes().subscribe(bikes => {
            this.bikes = bikes;
        });
    }

    delete(id: string) {    
        this.bikeService.deleteBike(id).subscribe(
            updatedBike => {
                this.bikes = this.bikes.filter(bike => bike._id !== id);
            },
            error => {
                console.log('error', error);
            }
        );
    }

    searchBar(event: Event, info){
        event.preventDefault();    
        console.log(info)
    }
    
    contact(bikesUserId){

        // var promise1 = new Promise(function(resolve, reject) {
        //     setTimeout(resolve, 100, 'foo');
        //   });
          
        //   console.log(promise1);

        // function resolve() {
        //     this.userService.getUserInfo(bikesUserId).subscribe(user => {
        //             this.BikesUserContactInfo = user
        //         }, 1000, this.BikesUserContactInfo = undefined);
        //     }
        // }
        let temp = undefined
        this.userService.getUserInfo(bikesUserId).subscribe(user => {
            temp = user
            var myVar = setTimeout(setContactInfo, 10000);
        });

        function setContactInfo() {
            this.BikesUserContactInfo = temp
        }
    }
}