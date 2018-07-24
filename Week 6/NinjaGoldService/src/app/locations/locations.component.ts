import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  // used to ouput the gold data back up to the parent. could use service but practing output/input as well
  @Output() updateGoldEmitter = new EventEmitter();
  gold:number = 0;
  message: string = "";
  
  constructor(private _dataService: DataService) { 
  }
  ngOnInit() {
  }
  
  triggerEventFarm($event){
    let randomNum = Math.floor(Math.random() * (1 + 3) + 2);
    this.message = (`You Earned ${randomNum} gold at the Farm`)
    this.gold += randomNum;
    this.updateGoldEmitter.emit(this.gold)
    this.gold = 0;
    this._dataService.updateMessage(this.message);
  }
  triggerEventCave($event){
    let randomNum = Math.floor(Math.random() * (1 + 5) + 5);
    this.message = (`You Earned ${randomNum} gold at the Cave`)
    this.gold += randomNum;
    this.updateGoldEmitter.emit(this.gold)
    this.gold = 0;
    this._dataService.updateMessage(this.message);
  }
  triggerEventCasino($event){
    let randomNum = Math.floor(Math.random() * (1 + 99) + 1);
    let random = Math.floor(Math.random() * (1 + 99) + 1);
    if (random % 2 === 1){
      this.message = (`Youve Lost ${randomNum} gold at the Casino`)
      this.gold -= randomNum;

    } else{
      this.message = (`Youve Earned ${randomNum} gold at the Casino`)
      this.gold += randomNum;
    }
    this.updateGoldEmitter.emit(this.gold)
    this.gold = 0;
    this._dataService.updateMessage(this.message);
  }
  triggerEventHouse($event){
    let randomNum = Math.floor(Math.random() * (1 + 8) + 7);
    this.message = (`You Earned ${randomNum} gold at the House`)
    this.gold += randomNum;
    this.updateGoldEmitter.emit(this.gold)
    this.gold = 0;
    this._dataService.updateMessage(this.message);
  }
}