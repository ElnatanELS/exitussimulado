import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent {
  dataSource: any[] = [
    {
      CPF: '12345678999',
      Nome: 'João da Silva Santos Lira',
      Resultado: 'Aprovado',
    },
    {
      CPF: '987654321',
      Nome: 'Maria José Rodrigues Vieira',
      Resultado: 'Reprovado',
    },
    { CPF: '987654321', Nome: 'Maria', Resultado: 'Reprovado' },
    { CPF: '987654321', Nome: 'Maria', Resultado: 'Aprovado' },
  ];
}
