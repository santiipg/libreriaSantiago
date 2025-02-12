import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../models/Libro';

@Component({
  selector: 'app-libros',
  standalone: false,

  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  libros : Libro [] = [];

  constructor(public LibrosService: LibrosService) { }
  ngOnInit(): void {
    this.LibrosService.getLibros().subscribe((libros:any) =>{
      this.libros = libros;
      console.log(this.libros);
    })
  }

}
