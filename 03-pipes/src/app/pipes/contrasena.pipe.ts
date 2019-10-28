import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
	name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

	transform(value: string, activar = true): any {
		if (activar) {
			return '*'.repeat(value.length);
		} else {
			return value;
		}
	}

}
