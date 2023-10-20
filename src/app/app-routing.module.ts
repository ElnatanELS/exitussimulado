import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './pages/resultado/resultado.component';

const routes: Routes = [
  {
    path: 'gabarito',
    loadComponent: () =>
      import('./pages/gabarito/gabarito.component').then(
        (c) => c.GabaritoComponent
      ),
  },
  { path: '', redirectTo: '/gabarito', pathMatch: 'full' },
  { path: 'resultados', component: ResultadoComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
