import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})
export class BusquedaComponent implements OnInit {

	heroes: Heroe[] = [];
	termino: string;

	constructor(private heroesService: HeroesService, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe( params => {
			this.termino = params['termino'];
			this.heroes = this.heroesService.buscarHeroes(this.termino);
		} );
	}

	verHeroe(idx: number) {
		this.router.navigate( ['heroe', idx] );
	}
}
