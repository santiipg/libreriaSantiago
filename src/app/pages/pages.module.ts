import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { LibrosComponent } from './libros/libros.component';
import { TemaComponent } from './tema/tema.component';
import { AutorComponent } from './autor/autor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from '../components/components.module';
import {CardModule} from 'primeng/card';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonDirective} from "primeng/button";
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    MainPageComponent,
    LibrosComponent,
    TemaComponent,
    AutorComponent,
    NuevoLibroComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    ButtonDirective,
    DialogModule
  ]
})
export class PagesModule { }
