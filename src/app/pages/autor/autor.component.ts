import {Component, OnInit} from '@angular/core';
import {AutoresService} from '../../services/autores.service';
import {Autor} from '../../models/Autor';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-autor',
  standalone: false,

  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent implements OnInit {

  mostrarFormulario: boolean = false;
  mostrarFormularioModificar: boolean = false;

  autores: Autor[] = []
  autor: Autor = new Autor();
  protected nuevoAutorFormulario: FormGroup;
  protected modificarAutorFormulario: FormGroup;

  constructor(private autorService: AutoresService, private fb: FormBuilder) {
    this.nuevoAutorFormulario = this.fb.group({
      nombre: ['', Validators.required]
    });
    this.modificarAutorFormulario = this.fb.group({
      id : ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.autorService.getAutores().subscribe((autores) => {
      this.autores = autores;
      console.log(this.autores);
    })
  }

  public addAutor() {
    this.autorService.postAutor(this.nuevoAutorFormulario.value).subscribe((autor) => {
      console.log(autor)
      Swal.fire({
        title: 'Autor añadido',
        text: 'El autor ha sido añadido correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }, (error) => {
      console.log(error)
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error al añadir el autor',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    })
    this.mostrarFormulario = false;
  }

  public mostrarForm() {
    this.mostrarFormulario = true;
  }

  public mostrarFormModificar(autor: Autor) {
    this.obtenerInformacionPersona(autor)
    this.mostrarFormularioModificar = true;
  }

  public deleteAutor(autor: Autor) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres borrar el autor ' + autor.nombre + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.autorService.deleteAutor(autor.id).subscribe((response) => {
          console.log('Respuesta del servidor:', response);
          Swal.fire({
            title: 'Autor eliminado',
            text: 'El autor ha sido eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        }, (error: HttpErrorResponse) => {
          if(error.status === 400) {
            console.log('Error al eliminar el autor: ', error.message);
            Swal.fire({
              title: 'Error',
              text: 'Ha ocurrido un error al eliminar el autor',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
          console.log(error)
        });
      }
    });
  }

  obtenerInformacionPersona(autor: Autor) {
    this.autorService.getAutorById(autor.id).subscribe((autor) => {
      this.modificarAutorFormulario.patchValue({
        id: autor.id,
        nombre: autor.nombre
      })
    })
  }
  public modificarAutor(autor: Autor) {
    this.autorService.patchAutor(this.modificarAutorFormulario.value).subscribe(
      response => {
        console.log('Autor updated successfully', response);
      },
        error => {
          console.error('Error updating autor', error);
        }
    )
  }
}
