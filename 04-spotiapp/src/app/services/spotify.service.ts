import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root' // Ya no es necesario agregarlo al app.module.ts
})
export class SpotifyService {

	constructor( private http: HttpClient ) {
		console.log('Spotify Service listo!');
	}

	getNewReleases() {

		const headers = new HttpHeaders({
			Authorization: 'Bearer BQBlTcnBDLB8qmqUeGn1DWr-e6YJ6OBisBficPhoDsoqfMR-1jDND-cLx89GZ-umWtpFQbIFrqTILkMKRNU'
		});

		this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers })
				 .subscribe( (data: any) => {
					 console.log(data);
				 });
	}
}
