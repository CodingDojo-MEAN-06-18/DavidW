import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserService, BikeService } from '../services';
import { User } from '../models';
import { Bike } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})

export class ListingsComponent implements OnInit {
    user = new User();
    bike = new Bike();
    currentUserID = '';
    currentUserInfo = null;
    hidden = true;
    bikes = []
    
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
    onSubmit(value: Bike) {
        this.bikeService.createBike(value).subscribe(bike => {
            this.router.navigateByUrl('/listings');
            this.getBikes()
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
    onUpdate(bike_id, value: Bike) {
        this.bikeService.updateBike(bike_id, value).subscribe(
            updatedBike => {
                this.getBikes();
            },
            error => {
              console.log('error', error);
                }
          );
        }
    // onUpdate(bike_id, value: Bike) {
    //     this.bikeService.updateBike(bike_id, value)
    //     }
}
