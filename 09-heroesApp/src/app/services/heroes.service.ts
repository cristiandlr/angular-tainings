import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  firebaseUrl = 'https://ng-backend-9b2fa.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ) {

    const url = `${this.firebaseUrl}/heroes.json`;
    return this.http.post(url, heroe)
               .pipe(
                 map( (resp: any) => {
                   heroe.id = resp.name;
                   return heroe;
                 })
               );

  }

  actualizarHeroe (heroe: HeroeModel) {
    const heroeTemp = {
      ...heroe
    }

    delete heroeTemp.id;

    const url = `${this.firebaseUrl}/heroes/${heroe.id}.json`;
    return this.http.put(url, heroeTemp);

  }

  deleteHeroe(id: string) {
    const url = `${this.firebaseUrl}/heroes/${id}.json`;
    return this.http.delete(url); 
  }

  getHeroe(id: string) {
    const url = `${this.firebaseUrl}/heroes/${id}.json`;
    return this.http.get(url);
  }

  getHeroes() {
    const url = `${this.firebaseUrl}/heroes.json`;
    return this.http.get(url)
               .pipe(
                 map (this.crearArregloHeroes)
               );
  }

  private crearArregloHeroes( heroesObj: object ) {
    const heroes: HeroeModel[] = [];

    if ( heroesObj === null ) return [];

    Object.keys(heroesObj).forEach( key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    });

    return heroes;
  } 

}
