import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { LibrosComponent } from './libros/libros.component';
import { TemaComponent } from './tema/tema.component';
import { AutorComponent } from './autor/autor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    MainPageComponent,
    LibrosComponent,
    TemaComponent,
    AutorComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
]
})
export class PagesModule { }
