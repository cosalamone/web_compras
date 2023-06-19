import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesosFormat'
})
export class PesosFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',

    })

  
    return  formatter.format(value);
  }

}
