import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: []
})
export class HomeComponent implements OnInit {

	nuevasCanciones: any[] = [];
	loading: boolean;
	hayError = false;
	mensajeError = '';

	constructor( private spotify: SpotifyService) {
		this.loading = true;

		this.spotify.getNewReleases()
					.subscribe(( data: any ) => {
						this.nuevasCanciones = data;
						this.loading = false;
					}, ( err ) => {
						this.hayError = true;
						this.mensajeError = `${err.error.error.status} - ${err.error.error.message}`;
					});
	}

	ngOnInit() {
	}

}
