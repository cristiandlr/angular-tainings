import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})
export class BusquedaComponent implements OnInit {

	public heroes: Heroe[] = [];

	constructor(private heroesService: HeroesService, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe( params => {
			this.heroes = this.heroesService.buscarHeroes(params.termino);
			console.log(this.heroes);
		} );
	}

	verHeroe(idx: number) {
		this.router.navigate( ['heroe', idx] );
	}
}
