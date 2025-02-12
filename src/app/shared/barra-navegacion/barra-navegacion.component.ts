import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: false,
  
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})

export class BarraNavegacionComponent implements OnInit {
  navBar: MenuItem[] = [];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.navBar= [
      {
        label: 'Libros',
        icon: "assets/Icons/libro-abierto.png",
        command:()=>{ this.router.navigateByUrl('main/libros') }
      },
      {
        label: 'Autores',
        icon: "assets/Icons/editor.png",
        command:()=>{ this.router.navigateByUrl('main/autores') }
      },
      {
        label: 'Temas',
        icon: "assets/Icons/libro-de-psicologia.png",
        command:()=>{ this.router.navigateByUrl('main/temas') }
      },

    ];
}
}
