import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pagina-corporativa/inicio/inicio.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pag-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
