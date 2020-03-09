import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder ) {

    this.crearFormulario();

  }

  ngOnInit() {
  }

  get nombreNoValido() {
    const control = this.forma.get('nombre');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  get apellidoNoValido() {
    const control = this.forma.get('apellido');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  get correoNoValido() {
    const control = this.forma.get('correo');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre: ['Cristian', [
        Validators.required,
        Validators.minLength(5)
      ]],
      apellido: ['D', [
        Validators.required,
        Validators.minLength(5)
      ]],
      correo: ['cris@gmail.com', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      })
    });
  }

  guardar() {
    console.log( this.forma );

    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
  }

}
