import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pagina-corporativa/inicio/inicio.component';
import { GaleriaComponent } from './components/pagina-corporativa/galeria/galeria.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'galeria', component: GaleriaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
