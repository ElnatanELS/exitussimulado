import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CPF',
})
export class CPFPipe implements PipeTransform {
  transform(CPF: string): string {
    if (CPF) {
      return CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return '';
  }
}
