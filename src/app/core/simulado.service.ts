import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimuladoService {

  constructor( private http: HttpClient) { }

  baseUrl: string = 'https://exittuscursos.com.br/simuladoRest/';

  addSimulado(simulado:any){
     return this.http.post(this.baseUrl+"insert.php", simulado)
  }

  getSimulados() {
    return this.http.get(this.baseUrl+'view.php');
  }

  getSingleSimulado(id:any) {
    return this.http.get(this.baseUrl+'view.php?id='+id);
  }
}
