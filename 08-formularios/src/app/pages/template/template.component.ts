import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Cristian',
    apellido: 'De León',
    correo: 'cris@gmail.com',
    pais: 'CRI',
    genero: 'M'
  };

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit() {

    this.paisService.getPaises()
        .subscribe( paises => {
          this.paises = paises;
          this.paises.unshift({
            nombre: '(Seleccione un país)',
            codigo: ''
          })
        });

  }

  guardar( forma: NgForm ) {

    if (forma.invalid) {
      Object.values( forma.controls ).forEach( control => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    console.log( forma.value );
  }
}
