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
idActual:any
usuarioAutentificado:boolean=true
editarEducacion: FormGroup;
  constructor(private servicio:EducacionService, private eduFormBuilder: FormBuilder) { 

    this.editarEducacion = this.eduFormBuilder.group({
      edicionIcono: ['fa-', [Validators.required,Validators.minLength(5)]],
      edicionTitulo: ['', [Validators.required,Validators.minLength(5)]],
      edicionInstitucion: ['',[Validators.required,Validators.minLength(5)]],
      edicionAnio:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
      edicionWeb:['https://',Validators.required]
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
    this.servicio.obtenerEducacion().subscribe(data=>{
      console.log(data);
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

    let editarEducacion= new Educacion(icono,titulo,institucion,anio,web)
    this.servicio.editarDatosEducacion(this.idActual,editarEducacion).subscribe({
      next: (data) =>{
      this.educacion[this.idActual]=editarEducacion;
      document.getElementById('cerrarEducacion')?.click();
      this.educacion[this.idActual]['id']=this.idActual;
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

  mostrarDatos(i:number) {
    this.editarEducacion.get('edicionIcono')?.setValue(this.educacion[i].icono);
    this.editarEducacion.get('edicionTitulo')?.setValue(this.educacion[i].titulo);
    this.editarEducacion.get('edicionInstitucion')?.setValue(this.educacion[i].institucion);
    this.editarEducacion.get('edicionAnio')?.setValue(this.educacion[i].anio);
     this.editarEducacion.get('edicionWeb')?.setValue(this.educacion[i].web);
     this.idActual=this.educacion[i]['id'];
  }
}
