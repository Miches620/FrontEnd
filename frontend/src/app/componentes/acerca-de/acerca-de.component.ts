import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { ObtenerDatosAcercaDe } from 'src/app/servicios/AcercaDeService';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: any;
  imagen:any
  nombre:any
  edad:any
  titulo:any
  id:any
  editarAbout: FormGroup;
  modoEditor:any
  constructor(
    private servicio: ObtenerDatosAcercaDe,
    private login:ObtenerDatosService,
    private aboutFormBuilder: FormBuilder
  ) {


    this.editarAbout = this.aboutFormBuilder.group({
      edicionNombre: ['', [Validators.required, Validators.minLength(5)]],
      edicionEdad: ['', [Validators.required, Validators.maxLength(2)]],
      edicionTitulo: ['', [Validators.required, Validators.minLength(5)]],
      edicionImagen: ['https://'],
    });
  }

  get aboutNombre() {
    return this.editarAbout.get('edicionNombre');
  }

  get aboutEdad() {
    return this.editarAbout.get('edicionEdad');
  }

  get aboutTitulo() {
    return this.editarAbout.get('edicionTitulo');
  }

  get aboutImagen() {
    return this.editarAbout.get('edicionImagen');
  }

  ngOnInit(): void {
    this.login.iniciarSesion.subscribe(data =>{
      this.modoEditor=true;
    })
    this.login.cerrarSesion.subscribe(data =>{
      this.modoEditor=false;
    })
    this.servicio.obtenerAcercaDe(1).subscribe((data) => {
      this.persona = data;
      this.imagen=this.persona['img'];
      this.nombre=this.persona['nombre'];
      this.edad=this.persona['edad'];
      this.titulo=this.persona['titulo'];
      this.id=this.persona['id'];
    });
  }

  limpiarFormulario() {
    this.editarAbout.reset();
  }

  guardarCambios() {
    if (this.editarAbout.valid) {
      let nombre = this.editarAbout.get('edicionNombre')?.value;
      let edad = this.editarAbout.get('edicionEdad')?.value;
      let titulo = this.editarAbout.get('edicionTitulo')?.value;
      let img = this.editarAbout.get('edicionImagen')?.value;

      let Editarpersona = new Persona (this.id ,nombre, edad, titulo, img);
      this.servicio.editarDatosAcercaDe(Editarpersona).subscribe({
        next: (data) => {
          this.persona = Editarpersona;
          this.editarAbout.reset();
          this.ngOnInit();
          document.getElementById('cerrarAbout')?.click();
        },
        error: (error) => {
          alert(
            'Error al intentar actualizar los datos. Por favor intente nuevamente'
          );
        },
      });
    } else {
      alert(
        'Error al actualizar los datos. Verifique que los datos ingresados cumplan con las condiciones de ingreso'
      );
      this.editarAbout.markAllAsTouched();
    }
  }

  mostrarDatos() {
    this.editarAbout.get('edicionNombre')?.setValue(this.persona.nombre);
    this.editarAbout.get('edicionEdad')?.setValue(this.persona.edad);
    this.editarAbout.get('edicionTitulo')?.setValue(this.persona.titulo);
    this.editarAbout.get('edicionImagen')?.setValue(this.persona.img);
  }
}
