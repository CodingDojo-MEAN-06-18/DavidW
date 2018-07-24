import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.css']
})
export class PowerLevelComponent implements OnInit {
  power: number;

  constructor() { }
  ngOnInit() {
    this.power = 10;
  }
  // getPower(num) {
  //   console.log(num);
  //   this.power = num;
  //   return this.power;
  // }
}
