import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  gold: number = 0;

  ngOnInit() {
  }
  // data from child component using output and binding 
  fromChild(number){
    this.gold += number;
  }
}

