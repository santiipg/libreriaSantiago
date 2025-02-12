import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from './libros/libros.component';
import { MainPageComponent } from './main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TemaComponent } from './tema/tema.component';
import { AutorComponent } from './autor/autor.component';
import {NuevoLibroComponent} from './nuevo-libro/nuevo-libro.component';


const routes : Routes = [
  {
    path: 'main', component: MainPageComponent, children:[
      {path: 'libros', component: LibrosComponent, data: {title: 'Libros'}},
      {path:'temas', component: TemaComponent, data:{title: 'Temas'}},
      {path: 'autores', component: AutorComponent, data:{title: 'Autores'}},
      {path: 'nuevo-libro', component: NuevoLibroComponent, data:{title: 'Nuevo Libro'}},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
