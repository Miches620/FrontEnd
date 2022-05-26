import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion:any
idActual:any
editarEducacion: FormGroup;
edu:any
modoEditor:any
  constructor(private servicio:EducacionService, private eduFormBuilder: FormBuilder, private login:ObtenerDatosService) { 

    this.editarEducacion = this.eduFormBuilder.group({
      edicionIcono: ['fa-', [Validators.required,Validators.minLength(5)]],
      edicionTitulo: ['', [Validators.required,Validators.minLength(5)]],
      edicionInstitucion: ['',[Validators.required,Validators.minLength(5)]],
      edicionAnio:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.min(1901),Validators.max(2022) ]],
      edicionWeb:['https://']
    });

  }

  get eduIcono() {
    return this.editarEducacion.get('edicionIcono');
  }

  get eduTitulo() {
    return this.editarEducacion.get('edicionTitulo');
  }

  get eduInstitucion() {
    return this.editarEducacion.get('edicionInstitucion');
  }

  get eduAnio() {
    return this.editarEducacion.get('edicionAnio');
  }

  get eduWeb() {
    return this.editarEducacion.get('edicionWeb');
  }


  ngOnInit(): void {
    this.login.iniciarSesion.subscribe(data =>{
      this.modoEditor=true;
    })
    this.login.cerrarSesion.subscribe(data =>{
      this.modoEditor=false;
    })
    this.servicio.obtenerEducacion().subscribe(data=>{
      
      this.educacion=data;
    })
  }

  limpiarFormulario() {
    this.editarEducacion.reset();
  }

  guardarCambios(){
    if( this.editarEducacion.valid){
    let icono=this.editarEducacion.get("edicionIcono")?.value;
    let titulo=this.editarEducacion.get("edicionTitulo")?.value;
    let institucion=this.editarEducacion.get("edicionInstitucion")?.value;
    let anio=this.editarEducacion.get("edicionAnio")?.value;
    let web=this.editarEducacion.get("edicionWeb")?.value;

    let editarEducacion= new Educacion(this.idActual,icono,titulo,institucion,anio,web)
    this.servicio.editarDatosEducacion(this.idActual,editarEducacion).subscribe({
      next: (data) =>{
      this.educacion[this.edu]=editarEducacion;
      this.ngOnInit();
      document.getElementById('cerrarEducacion')?.click();
      },
    error: (error) =>{
      alert("Error al intentar actualizar los datos. Por favor intente nuevamente");
    }
  })
}
else{
  alert(
    'Error al actualizar los datos. Verifique que los datos ingresados cumplan con las condiciones de ingreso'
  );
  this.editarEducacion.markAllAsTouched();
}
  }

  mostrarDatos(edu:Educacion) {
    this.edu=edu;
    this.editarEducacion.get('edicionIcono')?.setValue(edu['icono']);
    this.editarEducacion.get('edicionTitulo')?.setValue(edu['titulo']);
    this.editarEducacion.get('edicionInstitucion')?.setValue(edu['institucion']);
    this.editarEducacion.get('edicionAnio')?.setValue(edu['anio']);
     this.editarEducacion.get('edicionWeb')?.setValue(edu['web']);
     this.idActual=edu['id'];
  }

  almacenarId(edu:Educacion){
    this.idActual=edu['id'];
  }

  eliminar(){
    this.servicio.borrarDatosEducacion(this.idActual).subscribe({
      next: (data) =>{
        document.getElementById('cerrarBorrarEducacion')?.click();
        this.idActual=null;
      this.ngOnInit();
      },
    error: (error) =>{
      alert("Error al intentar borrar el elemento. Por favor intente nuevamente");
    }
  })
  }
}
