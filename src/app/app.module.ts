import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { MatTableModule } from '@angular/material/table';
import { CPFPipe } from './cpf.pipe';
import { DialogConfirmaComponent } from './pages/gabarito/dialog-confirma/dialog-confirma.component';

@NgModule({
  declarations: [AppComponent, ResultadoComponent, CPFPipe],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    DialogConfirmaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
