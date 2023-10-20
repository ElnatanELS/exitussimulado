import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-resultado-dialog',
  templateUrl: './resultado-dialog.component.html',
  styleUrls: ['./resultado-dialog.component.scss'],
})
export class ResultadoDialogComponent {
  constructor(public dialogRef: MatDialogRef<ResultadoDialogComponent>) {}

  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }
}
