import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-charlie',
  templateUrl: './charlie.component.html',
  styleUrls: ['./charlie.component.css']
})
export class CharlieComponent implements OnInit {
  charlieNum: number = undefined;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  onClick(){
    this.charlieNum = this._dataService.retrieveCharlieNumber();
  }

}
