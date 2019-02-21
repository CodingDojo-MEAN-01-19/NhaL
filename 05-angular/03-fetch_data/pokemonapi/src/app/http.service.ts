import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.pokemon();
  }


  pokemon() {
    const tempObservable = this._http.get<PokeData>(
      'https://pokeapi.co/api/v2/pokemon/1/'
    );
    tempObservable.subscribe(data => {
      const pokemonName = data.name;
      console.log('data: ', data);
      console.log(
          data.name +
          ' abilities are ' +
          data.abilities[0].ability.name +
          ' and ' +
          data.abilities[1].ability.name
      );

      this.sharedAbilities(data.abilities[0].ability.url, pokemonName);
    });
  }

  sharedAbilities(url, pokemonName) {
    const chlorophyll = this._http.get<PokeData>(url);
    chlorophyll.subscribe(data => {
      console.log(
        data.name +
          ' pokemon with the same ability: ' +
          data.name +
          ' as ' +
          pokemonName
      );
      // console.log(data);
    });
  }


}

interface PokeData {
  abilities: Array<Ability>,
  name: string,
  height: number,
  pokemon: {}
}

interface Ability {
  ability: {
    name: string,
    url: string
  }

}


