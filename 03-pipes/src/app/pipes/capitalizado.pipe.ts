import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
	transform(value: string, todas=true): string {
		value = value.toLocaleLowerCase();
		let arr = value.split(' ');

		// tslint:disable-next-line: forin
		for (const i in arr) {
			arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
			if (!todas) {
				break;
			}
		}

		let nombre = arr.join(' ');

		return nombre;
	}
}
