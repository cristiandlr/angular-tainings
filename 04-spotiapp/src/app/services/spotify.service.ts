import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root' // Ya no es necesario agregarlo al app.module.ts
})
export class SpotifyService {

	constructor( private http: HttpClient ) {
		console.log('Spotify Service listo!');
	}

	getQuery( query: string ) {
		const url = `https://api.spotify.com/v1/${query}`;
		const headers = new HttpHeaders({
			Authorization: 'Bearer BQD04xwYuw6KYxcxC7qnli7kmnwSfbUP5KFQ-73lELXTF8-cBaxgkcDz1pG7_Q4QV_Ui2Ju-Jq2cP34WKU4'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases?limit=20')
					.pipe( map( (data: any) => data.albums.items ));
	}

	getArtistas( termino: string ) {
		return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
					.pipe( map( (data: any) => data.artists.items ));
	}

	getArtista( id: string ) {
		return this.getQuery(`artists/${ id }`);
	}

	getTopTracks( id: string ) {
		return this.getQuery(`artists/${ id }/top-tracks?country=us`)
					.pipe( map( (data: any) => data.tracks ));
	}
}
