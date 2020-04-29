import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroesService: HeroesService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.heroesService.getHeroe(id)
          .subscribe( (resp: HeroeModel) => {
            this.heroe = resp;
            this.heroe.id = id;
          });
    }

  }

  guardar( form: NgForm ) {

    if (form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    } as SweetAlertOptions);

    Swal.showLoading();

    let peticion: Observable<any>;

    if ( typeof(this.heroe.id) == 'undefined' ) {
      peticion = this.heroesService.crearHeroe( this.heroe );
    } else {
      peticion = this.heroesService.actualizarHeroe( this.heroe );
    }

    peticion.subscribe( resp => {
      console.log(resp);
      this.heroe = resp; // opcional
      
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se guardó correctamente',
        type: 'success'
      } as SweetAlertOptions);
      
    });
  }
}
