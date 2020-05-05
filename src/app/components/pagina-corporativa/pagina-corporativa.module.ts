import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';





@NgModule({
  declarations: [
    InicioComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    InicioComponent

  ]
})
export class PaginaCorporativaModule { }
