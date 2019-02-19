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
    const tempObservable = this._http.get(
      'https://pokeapi.co/api/v2/pokemon/1/'
    );
    tempObservable.subscribe(data => {
      console.log(data);
      console.log(
        data.name +
          ' abilities are ' +
          data.abilities[0].ability.name +
          ' and ' +
          data.abilities[1].ability.name
      );
    });
  }
}
