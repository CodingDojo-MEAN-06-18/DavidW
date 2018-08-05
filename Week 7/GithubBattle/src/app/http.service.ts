import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
    winner: BehaviorSubject<Object> = new BehaviorSubject({});
    loser: BehaviorSubject<Object> = new BehaviorSubject({});
    players: BehaviorSubject <any[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) { 
        this.getPlayers();
    }

    getPlayers(){
        this.http.get('players/getPlayers', {responseType: "json"}).subscribe((players: any[]) => {
            this.players.next(players);
        });
    }
    
    getGithubInfo(username){  
        console.log(username)
        return this.http.get(`https://api.github.com/users/${username}`)
    }

    addUser(newPlayer: any){
        console.log('********************************************in the add User method' )
        console.log(newPlayer);
        this.http.post('players/addPlayer', newPlayer, {responseType: "json"}).toPromise()
        .then(response => {
            console.log(response, "from service")
        })
        .catch(error => {
            console.log(error, "from service")
        })
    }

    battleStats(winner, loser){
        this.winner.next(winner);
        this.loser.next(loser);
    }
}




