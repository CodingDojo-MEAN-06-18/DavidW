import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})

export class HttpService {
	pokedex: BehaviorSubject <any[]> = new BehaviorSubject([]);
	favoritePokemon: BehaviorSubject <any[]> = new BehaviorSubject([]);

	constructor(private _http: HttpClient) {
		this.getFavorite();
	}
	getFavorite(){
	    this._http.get('https://pokeapi.co/api/v2/pokemon/1/').subscribe((fav: any[]) => {
		this.favoritePokemon.next(fav);
	});
	}
	
	getOtherPokemon(pokeId){
		this._http.get('https://pokeapi.co/api/v2/pokemon/' + pokeId + '/').subscribe((pokemon: any[]) => {
            this.pokedex.next(pokemon);
            // console.log("Got our pokemon!", pokemon)
        });
	}
}
