import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RestcountriesComponent } from './components/restcountries/restcountries.component';

export const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'restcountries', component: RestcountriesComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '', pathMatch: 'full', redirectTo: 'home' }
];
