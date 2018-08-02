import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../../models/player';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player = new Player();

  @Output() newPlayer = new EventEmitter<Player>();
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ', this.player);

    this.newPlayer.emit(this.player);
    this._httpService.addPlayer(this.player)

    this.router.navigateByUrl('players');
    this.player = new Player();

    form.reset();
  }
}