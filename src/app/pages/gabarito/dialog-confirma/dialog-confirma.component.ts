import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-confirma',
  templateUrl: './dialog-confirma.component.html',
  styleUrls: ['./dialog-confirma.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogConfirmaComponent {
  constructor(public dialogRef: MatDialogRef<DialogConfirmaComponent>) {}

}
