import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  messages = [];

  constructor() {
   }

  updateMessage(message){
    this.messages.push(message)
    console.log(this.messages)
  }
}
