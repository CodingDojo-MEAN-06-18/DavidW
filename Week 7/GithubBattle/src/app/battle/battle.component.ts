import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Player } from '../player';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
    player: Player = new Player();
    players

    formOneOFF = false;
    user1NotFound = false;
    user1Name = '';
    user1Score = 0;
    user1Pic = '';
    user1Exist = false;
    
    formTwoOFF = false;
    user2NotFound = false;
    user2Name = '';
    user2Score = 0;
    user2Pic = '';
    user2Exist = false;

    winner: Object = {};
    loser: Object = {};

    constructor(private httpService: HttpService, private router: Router) { }
    
    ngOnInit() {
    }
    
    onSubmit1(event: Event, form: NgForm){
        event.preventDefault();

        // use the http service to get the information from the api and store it into local variables
        this.httpService.getGithubInfo(form.value.name1).subscribe(
            (response) => {
                this.user1Score = response['public_repos']+response['followers'];
                this.user1Score= this.user1Score*12;
                this.user1Pic= response['avatar_url']

                // if the user has a score then save the user and change the button switches and add the user to the database
                if (this.user1Score > 0) {
                    this.user1NotFound = false;
                    this.formOneOFF = true;
                    this.user1Name =  form.value.name1
                    form.reset();
                } else {
                    // if the user isnt found turn the error message button on
                    this.user1NotFound = true;
                }       
            },
            (errors) => { 
                console.log(errors)
                this.user1NotFound = true;
            }
        )
    }

    onSubmit2(event: Event, form: NgForm){
        event.preventDefault();

        // use the http service to get the information from the api and store it into local variables
        this.httpService.getGithubInfo(form.value.name2).subscribe(
            (response) => {
                this.user2Score = response['public_repos']+response['followers'];
                this.user2Score= this.user2Score*12;
                this.user2Pic= response['avatar_url']

                // if the user has a score then save the user and change the button switches and add the user to the databas
                if (this.user2Score > 0) {
                    this.user2NotFound = false;
                    this.formTwoOFF = true;
                    this.user2Name = form.value.name2;
                    form.reset();
                } else {
                    this.user2NotFound = true;
                }       
            },
            (errors) => { 
                console.log(errors)
                this.user2NotFound = true;
            }
        )
    }

    battleTime(){
        // added for checking current users
        this.httpService.players.subscribe(
            (players) => { this.players = players; 
            }
        );
        for(let person of this.players){
            console.log(this.user1Name)
            if(this.user1Name === person.name){
                console.log("user 1 matches database")
                this.user1Exist = true;
            }
            if(this.user2Name === person.name){
                console.log("user 2 matches database")
                this.user2Exist = true;
            }
        }
        if (this.user1Exist === false) {
            this.player.score = this.user1Score;
            this.player.pic = this.user1Pic;
            this.player.name = this.user1Name;
            this.httpService.addUser(this.player)
            this.player = new Player();
        }
        if (this.user2Exist === false) {
            this.player.score = this.user2Score;
            this.player.pic = this.user2Pic;
            this.player.name = this.user2Name;
            this.httpService.addUser(this.player)
            this.player = new Player();
        }
        // reset the boolean check back
        this.user1Exist = false;
        this.user2Exist = false;




        if (this.user1Score > this.user2Score) {
            this.winner = {
                winnerName: this.user1Name,
                winnerPic: this.user1Pic,
                winnerScore: this.user1Score
            }
            this.loser = {
                loserName: this.user2Name,
                loserPic: this.user2Pic,
                loserScore: this.user2Score
            }  
        } else {
            this.winner = {
                winnerName: this.user2Name,
                winnerPic: this.user2Pic,
                winnerScore: this.user2Score
            }
            this.loser = {
                loserName: this.user1Name,
                loserPic: this.user1Pic,
                loserScore: this.user1Score
            }  
        }
        console.log('battling....');
        this.httpService.battleStats(this.winner,this.loser)
        this.router.navigate(['/results'])
    }
}
