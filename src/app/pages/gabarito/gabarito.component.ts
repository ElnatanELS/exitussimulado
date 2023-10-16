import { DialogConfirmaComponent } from './dialog-confirma/dialog-confirma.component';
import { SimuladoService } from './../../core/simulado.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { calculo } from 'src/app/shared/calculo-simulado';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-gabarito',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule,MatSnackBarModule,
    ReactiveFormsModule , MatDialogModule, DialogConfirmaComponent],

  templateUrl: './gabarito.component.html',
  styleUrls: ['./gabarito.component.scss']
})
export class GabaritoComponent {
  form:any;
  pontos:any;
  enviado:boolean = false;
  questoes: number[] = [...Array(81).keys()]

  constructor(
    private formBuilder: FormBuilder,
    private simuladoService:SimuladoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) {
      this.form = this.formBuilder.group(
       {
         cpf: ['', Validators.max(11)],
         nome: [''],
         questoes: this.formBuilder.group({
          1:[''],
          2:[''],
          3:[''],
          4:[''],
          5:[''],
          6:[''],
          7:[''],
          8:[''],
          9:[''],
          10:[''],
          11:[''],
          12:[''],
          13:[''],
          14:[''],
          15:[''],
          16:[''],
          17:[''],
          18:[''],
          19:[''],
          20:[''],
          21:[''],
          22:[''],
          23:[''],
          24:[''],
          25:[''],
          26:[''],
          27:[''],
          28:[''],
          29:[''],
          30:[''],
          31:[''],
          32:[''],
          33:[''],
          34:[''],
          35:[''],
          36:[''],
          37:[''],
          38:[''],
          39:[''],
          40:[''],
          41:[''],
          42:[''],
          43:[''],
          44:[''],
          45:[''],
          46:[''],
          47:[''],
          48:[''],
          49:[''],
          50:[''],
          51:[''],
          52:[''],
          53:[''],
          54:[''],
          55:[''],
          56:[''],
          57:[''],
          58:[''],
          59:[''],
          60:[''],
          61:[''],
          62:[''],
          63:[''],
          64:[''],
          65:[''],
          66:[''],
          67:[''],
          68:[''],
          69:[''],
          70:[''],
          71:[''],
          72:[''],
          73:[''],
          74:[''],
          75:[''],
          76:[''],
          77:[''],
          78:[''],
          79:[''],
          80:[''],
          81:[''],

         })
       }
      )
      for (let index = 0; index < this.questoes.length; index++) {


      }


    }

    openDialog() {
      const dialogRef = this.dialog.open(DialogConfirmaComponent);

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.enviar()
        }
      });
    }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

    enviar(){

      this.pontos = calculo(this.form.value.questoes)
      const simulado = {
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        total: 10,
        questoes: JSON.stringify(this.form.value.questoes)

      }
      console.log(simulado.questoes)


      this.simuladoService.addSimulado(simulado).subscribe({
        next: (res:any) => {this.openSnackBar("simulado enviado",""), this.form.reset(); this.enviado = true},
        error: (e) => {
          console.log(e);
          this.openSnackBar("CPF Já cadastrado","")
        },
      }


      )

    }

    validar(){
      this.simuladoService.getSingleSimulado(this.form.value.cpf).subscribe(
        res => {console.log(res)
        }
      )
    }

}
