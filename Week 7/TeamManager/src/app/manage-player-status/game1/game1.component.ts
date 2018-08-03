import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';
import { Router } from '@angular/router'


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  players: Array<Player>= [];
  public href: string = "";

  gamenum = 1;
  // activePlayersforGame: Array<any> = [];

  constructor(private _httpService: HttpService, private router: Router) { }
  
  ngOnInit() {
    this._httpService.players.subscribe(
      (players) => { this.players = players; }
    );
      // console.log(this.gamenum)
      this.href = this.router.url;
      // console.log('url', this.router.url);
      this.gamenum = +(this.router.url[13])
      // console.log(this.gamenum)
  }
    // this._httpService.activePlayersGame1.subscribe(
    //   (activePlayers) => { this.activePlayersGame1 = activePlayers; }
    // );



    
  // ADDS PLAYER TO THE GAME IN SERVICE AND GIVES THE CURRENT GAME NUMBER 
  // activatePlayer(player){
  //   this._httpService.addToGame(player, 1);
  //   this.activePlayersforGame = this._httpService.activePlayersGame1;
  // }
  
  // THIS IS WHERE WE WILL EVENTUALLY CHANGE THE STATUS OF THE PLAYER
  changeStatus(player, num) {
    player.status[0] = num
    this._httpService.updatePlayer(player)
    // this.activePlayersforGame = this._httpService.activePlayersGame1;
    // getActivePlayers(Game1);
  }
  // onDelete(event, player) {
  //   event.preventDefault();
  //   this._httpService.deletePlayer(player._id);
  // }
}