import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrls: ['./display-pokemon.component.css']
})
export class DisplayPokemonComponent implements OnInit {
  favPokemon: Array<any> = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.favoritePokemon.subscribe(
      (response) => {
        this.favPokemon = response;
        console.log(this.favPokemon) 
        console.log(this.favPokemon) 
      }
    );
  }

}
