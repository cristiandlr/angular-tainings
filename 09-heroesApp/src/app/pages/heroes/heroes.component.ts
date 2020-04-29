import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.cargando = true;

    this.heroesService.getHeroes()
        .subscribe( resp => {
          this.heroes = resp;
          this.cargando = false;
        });
  }

  borrarHeroe(heroe: HeroeModel, idx: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea borrar a ${heroe.nombre}?`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    } as SweetAlertOptions).then( resp => {
      if (resp.value) {
        this.heroesService.deleteHeroe(heroe.id)
        .subscribe( resp => {
          this.heroes.splice(idx, 1);
        });
      }
    });
  
  }

}
