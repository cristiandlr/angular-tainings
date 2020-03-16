import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private validadores: ValidadoresService ) {

    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();

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

  get usuarioNoValido() {
    const control = this.forma.get('usuario');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  get distritoNoValido() {
    const control = this.forma.get('direccion.distrito');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  get ciudadNoValida() {
    const control = this.forma.get('direccion.ciudad');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  get getPasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1NoValido() {
    const control = this.forma.get('pass1');
    const noValido = control.invalid && control.touched;
    return noValido;
  }

  get pass2NoValido() {
    const control1 = this.forma.get('pass1').value;
    const control2 = this.forma.get('pass2').value;

    return control1 !== control2;
  }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre: ['Cristian', [
        Validators.required,
        Validators.minLength(5)
      ]],
      apellido: ['Herrera', [
        Validators.required,
        Validators.minLength(5),
        this.validadores.noHerrera
      ]],
      correo: ['cris@gmail.com', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      usuario: ['', Validators.required, this.validadores.existeUsuario ],
      pass1: ['', Validators.required ],
      pass2: ['', Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validadores.clavesIguales('pass1', 'pass2')
    });
  }

  crearListeners() {
    // this.forma.valueChanges.subscribe( valor => {
    //   console.log(valor);
    // });

    // this.forma.statusChanges.subscribe ( valor => {
    //   console.log( {valor} );
    // });

    this.forma.get('nombre').valueChanges.subscribe(console.log);
  }

  cargarDataAlFormulario() {
    //// Necesita todas las propiedades del formulario
    // this.forma.setValue({
    //   nombre: 'Cristian',
    //   apellido: 'De Leo',
    //   correo: 'mail@gmail.com',
    //   direccion: {
    //     distrito: 'Ontario',
    //     ciudad: 'Ottawa'
    //   },
    //   pasatiempos: []
    // });

    // Establece solamente las propiedades que se envían
    this.forma.reset({
      nombre: 'Cristian',
      apellido: 'De Leo',
      correo: 'mail@gmail.com',
      pass1: '123',
      pass2: '123',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Ottawa'
      },
      pasatiempos: []
    });

    ['Comer', 'Dormir'].forEach( valor => this.getPasatiempos.push(this.formBuilder.control(valor, Validators.required)));
  }

  agregarPasatiempo() {
    this.getPasatiempos.push(
      this.formBuilder.control('', Validators.required)
    );
  }

  borrarPasatiempo(i: number) {
    this.getPasatiempos.removeAt(i);
  }

  guardar() {
    // console.log( this.forma );

    if ( this.forma.invalid ) {
      this.touchAllFormControls(this.forma);
      return false;
    }

    // Post data

    this.forma.reset({
      nombre: '(sin nombre)'
    });

    return true;
  }

  touchAllFormControls(grupo: FormGroup) {
    Object.values( grupo.controls ).forEach( control => {
      if (control instanceof FormGroup) {
        this.touchAllFormControls(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}
