import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from '../models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BikeService {
  private baseUrl = '/api/bikes';

  constructor(private http: HttpClient) {}

//   gets all bikes
  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.baseUrl);
  }

//   gets a single bike by its id in mongodb
  getBike(id: string): Observable<Bike> {
    return this.http.get<Bike>(`${this.baseUrl}/${id}`);
  }

//   creates a new bike and stores it in mongodb
  createBike(bike: Bike): Observable<Bike> {
    console.log('creating bike', bike);
    return this.http.post<Bike>(this.baseUrl, bike);
  }

//   deletes a bike entry based on the id matched that was passed through
  deleteBike(id: string): Observable<Bike> {
    return this.http.delete<Bike>(`${this.baseUrl}/${id}`);
  }

//   updates the bike using the passed information of the userID and the new bike
  updateBike(userID: string, bike): Observable<Bike> {
    return this.http.put<Bike>(`${this.baseUrl}/update/${userID}`, bike);
  }
}




//   updateBike(id: string, bike) {
//   this.http.put(`${this.base}/update/${id}`, bike, {responseType: "json"}).toPromise()
//   .then(response => {
//       console.log(response, "updated bike")
//   })
//   .catch(error => {
//       console.log(error, "error updating bike")
//   })
//   this.getBikes();
// }
