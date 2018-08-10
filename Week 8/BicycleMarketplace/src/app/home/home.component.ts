import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserService, BikeService } from '../services';
import { User } from '../models';
import { Bike } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    bikes = [];
    randomBike
    
    constructor( 
        private bikeService: BikeService,
    ) {}

    ngOnInit() {
        this.bikeService.getBikes().subscribe(bikes => {
            this.bikes = bikes;
            const random = (Math.floor(Math.random() * this.bikes.length) + 1)
            this.randomBike = this.bikes[random - 1]
        });
    }
}