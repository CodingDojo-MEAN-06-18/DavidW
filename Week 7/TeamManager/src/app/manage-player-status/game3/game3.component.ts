import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
  players: Array<Player>= [];
  gamenum = 3;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.players.subscribe(
      (players) => { this.players = players; }
    );
  }
  changeStatus(player, num) {
    player.status[2] = num
    this._httpService.updatePlayer(player)
    // this.activePlayersforGame = this._httpService.activePlayersGame1;
    // getActivePlayers(Game1);
  }
}