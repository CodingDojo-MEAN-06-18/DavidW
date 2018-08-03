import { Injectable } from '@angular/core';
import { Player} from './models/player';
import { Game } from './models/game';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    players: BehaviorSubject <any[]> = new BehaviorSubject([]);
    activePlayersGameone: BehaviorSubject <any[]> = new BehaviorSubject([]);
    // activePlayersGame1: []
    activePlayersGame1 = [];

    constructor(private _http: HttpClient) {
        this.getPlayers();
    }

    addToGame(player, GameNumber){
        if(GameNumber === 1){
            this.activePlayersGame1.push(player);
            console.log(this.activePlayersGame1)
        }
    }
    updatePlayer(player){
        this._http.put('players/edit/' + player._id, player).subscribe(
            (response) => { 
                console.log("in the update player method")
        });
        this.getPlayers();

        // trying to add to a specific game might be overthinking it
        // this._http.post('/games/activatePlayer/' + 1, player).subscribe(
        //     (response) => { 
        //         // this.getPlayers(); 
        //         console.log("Adding player!", response);
        //     }
        // );
    }

    // getActivePlayers(){
    //     this._http.
    // }


    
// WORKING PLAYER FUNCTIONS OF getting all players, adding a player, deleting a player
    getPlayers(){
        // console.log('********************************************in the getPlayers method' )
        this._http.get('/players').subscribe((players: any[]) => {
            this.players.next(players);
            // console.log("Got our players!", players)
        });
    }

    addPlayer(newPlayer: any){
        // console.log('********************************************in the addPlayer method' )

        //dont subscribe.........................
        this._http.post('/players', newPlayer).subscribe(
            (response) => { 
                this.getPlayers(); 
                console.log("Adding player!", response);
            }
        );
    }

    // gets playerId from player-list component that called the method through http service
    deletePlayer(playerId) {
        // console.log('********************************************in the deletePlayer method' )
        this._http.delete('/players/destroy/' + playerId).subscribe((players: any[]) => {
            this.getPlayers(); // goes and gets the new updated player list
        });
    }
}