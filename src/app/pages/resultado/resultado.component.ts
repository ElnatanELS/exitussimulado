import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultadoDialogComponent } from './resultado-dialog/resultado-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ResultadoDialogComponent, {
      minWidth: '700px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
