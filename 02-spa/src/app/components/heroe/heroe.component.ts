import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styleUrls: []
})
export class HeroeComponent implements OnInit {

	heroe: Heroe = null;

	constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {

		activatedRoute.params.subscribe( params =>
			this.heroe = heroesService.getHeroe( params.id )
		);

	}

	ngOnInit() {
	}

}
