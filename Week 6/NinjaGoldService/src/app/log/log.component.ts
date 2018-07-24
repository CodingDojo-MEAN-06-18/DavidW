import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  messages = [];
  constructor(private _dataService: DataService) { 
    this.messages = this._dataService.messages;
  }
  ngOnInit() {
  }

}
