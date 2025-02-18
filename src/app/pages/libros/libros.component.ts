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

  getPortada(libro: Libro) {
    if(!libro.img.includes(".jpg") && !libro.img.includes(".png")){
      return `assets/libro.png`;
    }
    if(libro.img.includes("http")){
      return libro.img;
    }

    return `assets/${libro.img}`;
  }

}
