import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	constructor(public deseosService: DeseosService, private router: Router, private alertCtrl: AlertController) {
	}

	async agregarLista() {
		//this.router.navigateByUrl('/tabs/tab1/agregar');
		const alert = await this.alertCtrl.create({
			header: 'Nueva lista',
			inputs: [{
				name: 'titulo',
				type: 'text',
				placeholder: 'Nombre de la lista'
			}], //subHeader: '', //message: 'This is ',
			buttons: [{
				text: 'Cancelar',
				role: 'cancel',
				handler: () => {
						console.log('cancel');
					}
				},
				{
					text: 'Crear',
					handler: ( data ) => {
						if (data.titulo.length > 0) {
							this.deseosService.crearLista(data.titulo);
						}
					}
				}
			]
		});

		await alert.present();
	}

}
