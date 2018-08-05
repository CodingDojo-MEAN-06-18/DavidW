import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
    winner = {}
    loser = {}
    
    constructor(private router: Router, private http: HttpService) { }
    
    ngOnInit() {
        this.http.winner.subscribe(
            (winner) => { this.winner = winner; }
        );
        this.http.loser.subscribe(
            (loser) => { this.loser = loser; }
        );
    }

    reset(){
        this.router.navigate(['/'])
    }
}
