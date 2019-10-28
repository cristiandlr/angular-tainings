import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-restcountries',
	templateUrl: './restcountries.component.html',
	styles: []
})
export class RestcountriesComponent implements OnInit {

	paises: any[] = [];

	constructor(private http: HttpClient) {

		this.http.get('https://restcountries.eu/rest/v2/lang/es')
			.subscribe((paises: any) => {
				this.paises = paises;
			});

	}

	ngOnInit() {
	}

}
