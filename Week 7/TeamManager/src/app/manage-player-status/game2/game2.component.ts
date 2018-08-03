import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  players: Array<Player>= [];
  gamenum = 2;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.players.subscribe(
      (players) => { this.players = players; }
    );
  }
}