import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { MatTableModule } from '@angular/material/table';
import { CPFPipe } from './shared/pipe/cpf.pipe';
import { DialogConfirmaComponent } from './pages/gabarito/dialog-confirma/dialog-confirma.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultadoDialogComponent } from './pages/resultado/resultado-dialog/resultado-dialog.component';

@NgModule({
  declarations: [AppComponent, ResultadoComponent, CPFPipe, ResultadoDialogComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    DialogConfirmaComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
