import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
    players

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.players.subscribe(
        (players) => { this.players = players; 
        console.log(this.players);
        }
    );
}

}
