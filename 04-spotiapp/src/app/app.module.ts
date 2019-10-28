import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Routes

import { ROUTES } from './app.routes';
import { RestcountriesComponent } from './components/restcountries/restcountries.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SearchComponent,
		ArtistaComponent,
		NavbarComponent,
		RestcountriesComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(ROUTES, { useHash: true })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }