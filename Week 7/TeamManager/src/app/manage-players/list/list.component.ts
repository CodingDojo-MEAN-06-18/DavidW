import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    selectedPlayer: Player;
    players: Array<Player>= [];
  
    constructor(private _httpService: HttpService) { }
  
    ngOnInit() {
      this._httpService.players.subscribe(
        (players) => { this.players = players; }
      );
    }
    onDelete(event, player) {
      event.preventDefault();
      // console.log('deleting....', player._id);
      this._httpService.deletePlayer(player._id);
    }
  }
