import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
	declarations: [
		AppComponent,
		CapitalizadoPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
	bootstrap: [AppComponent]
})
export class AppModule { }
