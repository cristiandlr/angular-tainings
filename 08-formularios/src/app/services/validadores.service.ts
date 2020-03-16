import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidacion {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  // Validador cliente
  noHerrera(control: FormControl): ErrorValidacion {

    if ( control.value && control.value.toLowerCase() === 'herrera' ) {
      return {
        noHerrera: true
      };
    }

    return null;
  }

  // Validador de formulario
  clavesIguales( pass1Name: string, pass2Name: string) {

    return ( formGroup: FormGroup ) => {
      const control1 = formGroup.controls[pass1Name];
      const control2 = formGroup.controls[pass2Name];

      if ( control1.value === control2.value ) {
        control2.setErrors(null);
      } else {
        control2.setErrors( { noEsIgual: true } );
      }
    };

  }

  // Validador asíncrono

  existeUsuario(control: FormControl): Promise<ErrorValidacion> | Observable<ErrorValidacion> {

    if ( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if ( control.value === 'strider' ) {
          resolve ({ existe: true });
        } else {
          resolve (null);
        }
      }, 1500);
    });

  }

}
