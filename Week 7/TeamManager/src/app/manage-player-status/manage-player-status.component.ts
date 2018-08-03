import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'


@Component({
  selector: 'app-manage-player-status',
  templateUrl: './manage-player-status.component.html',
  styleUrls: ['./manage-player-status.component.css']
})
export class ManagePlayerStatusComponent implements OnInit {
  public href: string = "";
  gamenum: number = 1;
  constructor() { }

  ngOnInit() {
  }
  
  getNum(num){
    this.gamenum = num;
  }
  
  dataFromChild(eventData){
    console.log(eventData);
  }
}