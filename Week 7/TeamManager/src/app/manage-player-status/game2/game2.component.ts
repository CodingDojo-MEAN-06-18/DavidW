import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  players: Array<Player>= [];
  public href: string = "";
  gamenum = 2;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this._httpService.players.subscribe(
      (players) => { this.players = players; }
    );
      this.href = this.router.url;
      this.gamenum = +(this.router.url[13])
  }

  changeStatus(player, num) {
    player.status[1] = num
    this._httpService.updatePlayer(player)
  }
}