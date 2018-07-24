import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  betaNums: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.betaNums = this._dataService.retrieveBetaNumbers();
  }
  onClick() {
    this._dataService.addBetaRandomNumber();
  }
}
