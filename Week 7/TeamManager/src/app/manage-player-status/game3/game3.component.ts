import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
  players: Array<Player>= [];
  public href: string = "";
  gamenum = 3;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this._httpService.players.subscribe(
      (players) => { this.players = players; }
    );
      this.href = this.router.url;
      this.gamenum = +(this.router.url[13])
  }

  changeStatus(player, num) {
    player.status[2] = num
    this._httpService.updatePlayer(player)
  }
}