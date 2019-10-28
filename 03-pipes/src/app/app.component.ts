import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'pipes';
	nombre = 'Cristian';
	nombre2 = 'cristiAn rafaEL de LEON ronquiLLo';

	arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	PI = Math.PI;

	a = 0.234;

	salario = 1234.5;

	heroe = {
		nombre: 'Logan',
		clave: 'Wolverine',
		edad: 500,
		direccion: {
			calle: 'Primavera',
			casa: '19'
		}
	};

	valorDePromesa = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Llegó la data'), 2500);
	});

	fecha = new Date();

	video = 'PXKYA-zmzTY';

	activar = false;
}
