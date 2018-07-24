import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() {}
  ngOnInit() {}
  ngOnChanges() {
    this.power = this.power * 150;
  }
}
