import { Injectable } from '@angular/core';
import { Player} from './models/player';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
players: BehaviorSubject <any[]> = new BehaviorSubject([]);


constructor(private _http: HttpClient) {
    this.getPlayers();
}

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