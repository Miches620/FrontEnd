import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { ObtenerDatosAcercaDe } from 'src/app/servicios/AcercaDeService';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona:any
usuarioAutentificado:boolean=false
  editarAbout: FormGroup;
  constructor(private servicio:ObtenerDatosAcercaDe, private aboutFormBuilder: FormBuilder) {

    this.editarAbout = this.aboutFormBuilder.group({
      edicionNombre: ['', [Validators.required]],
      edicionEdad: ['', [Validators.required, Validators.maxLength(2)]],
      edicionTitulo: ['',[Validators.required, Validators.minLength(5)]],
      edicionImagen:['./assets/imagenes/about.jpg',[Validators.required]]
    });

   }
   
   get aboutNombre(){
return this.editarAbout.get("edicionNombre")
   }

  ngOnInit(): void {
    this.servicio.obtenerAcercaDe().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

  limpiarFormulario() {
    this.editarAbout.reset();
  }

  guardarCambios(){
    let nombre=this.editarAbout.get("edicionNombre")?.value;
    let edad=this.editarAbout.get("edicionEdad")?.value;
    let titulo=this.editarAbout.get("edicionTitulo")?.value;
    let img=this.editarAbout.get("edicionImagen")?.value;
    let Editarpersona= new Persona(nombre,edad,titulo,img)
    this.servicio.editarDatosAcercaDe(Editarpersona).subscribe({
      next: (data) =>{
      this.persona=Editarpersona;
      this.editarAbout.reset();
      document.getElementById('cerrarAbout')?.click();
      },
    error: (error) =>{
      alert("Error al intentar actualizar los datos. Por favor intente nuevamente");
    },
  })
  }


}
