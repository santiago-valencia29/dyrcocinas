import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';





@NgModule({
  declarations: [
    InicioComponent,
    GaleriaComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    InicioComponent,
    GaleriaComponent

  ]
})
export class PaginaCorporativaModule { }
