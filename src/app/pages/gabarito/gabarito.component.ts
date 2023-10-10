import { SimuladoService } from './../../core/simulado.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-gabarito',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule,MatSnackBarModule,
    ReactiveFormsModule ],
  templateUrl: './gabarito.component.html',
  styleUrls: ['./gabarito.component.scss']
})
export class GabaritoComponent {
  form:any;

  constructor(
    private formBuilder: FormBuilder,
    private simuladoService:SimuladoService,
    private _snackBar: MatSnackBar
    ) {
      this.form = this.formBuilder.group(
       {
         cpf: [''],
         nome: [''],
         questoes: this.formBuilder.group({
          1:[''],
          2:[''],
          3:[''],
          4:[''],
          5:['']
         })
       }
      )


    }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

    enviar(){

      const simulado = {
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        total: 2.5,
        questoes: JSON.stringify(this.form.value.questoes)

      }
      console.log(simulado)


      this.simuladoService.addSimulado(simulado).subscribe({
        next: (res:any) => {this.openSnackBar("simulado enviado",""), this.form.reset()},
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
