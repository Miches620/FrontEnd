import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion:any
usuarioAutentificado:boolean=true
editarEducacion: FormGroup;
  constructor(private servicio:EducacionService, private eduFormBuilder: FormBuilder) { 

    this.editarEducacion = this.eduFormBuilder.group({
      edicionIcono: ['', [Validators.required]],
      edicionTitulo: ['', [Validators.required,]],
      edicionInstitucion: ['',[Validators.required,]],
      edicionAnio:['',[Validators.required,Validators.maxLength(4)]],
      edicionWeb:['https://',Validators.required]
    });

  }

  ngOnInit(): void {
    this.servicio.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacion=data["educacion"];
    })
  }

  limpiarFormulario() {
    this.editarEducacion.reset();
  }

  guardarCambios(){
    let icono=this.editarEducacion.get("edicionIcono")?.value;
    let titulo=this.editarEducacion.get("edicionTitulo")?.value;
    let institucion=this.editarEducacion.get("edicionInstitucion")?.value;
    let anio=this.editarEducacion.get("edicionAnio")?.value;
    let web=this.editarEducacion.get("edicionWeb")?.value;

    let editarEducacion= new Educacion(icono,titulo,institucion,anio,web)
    this.servicio.editarDatosEducacion(editarEducacion).subscribe({
      next: (data) =>{
      this.educacion=editarEducacion;
      console.log(this.educacion)
      this.editarEducacion.reset();
      document.getElementById('cerrarEducacion')?.click();
      },
    error: (error) =>{
      alert("Error al intentar actualizar los datos. Por favor intente nuevamente");
    },
  })
  }
}
