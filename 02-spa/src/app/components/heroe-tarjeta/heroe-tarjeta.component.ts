import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-heroe-tarjeta',
	templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

	@Input() heroe: Heroe;
	@Input() index: number;

	@Output() heroeSeleccionado: EventEmitter<number>;

	constructor() {
		this.heroeSeleccionado = new EventEmitter();
	}

	ngOnInit() {
	}

	verHeroe() {
		this.heroeSeleccionado.emit(this.index);
	}
}
