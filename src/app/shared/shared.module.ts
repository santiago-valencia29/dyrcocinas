import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// import { FooterComponent } from './footer/footer.component';
// import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';


@NgModule({
  declarations: [
    // ErrorComponent, 
    // FooterComponent,
    // PagNotFoundComponent,
   
  NavbarComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
     NavbarComponent,
    FooterComponent
    // PagNotFoundComponent,
  ]
})
export class SharedModule { }
