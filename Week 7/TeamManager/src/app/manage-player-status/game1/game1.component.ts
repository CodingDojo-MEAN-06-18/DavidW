import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  players: Array<Player>= [];
  gamenum = 1;
  // activePlayersforGame: Array<any> = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.players.subscribe(
      (players) => { this.players = players; }
    );
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