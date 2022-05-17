import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Proyectos } from 'src/app/entidades/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any
  editarProyectos:FormGroup
  idActual:any
  boton:boolean=false
  constructor(private servicio:ProyectosService,private proFormBuilder: FormBuilder) { 

    this.editarProyectos = this.proFormBuilder.group({
      edicionImg: ['',Validators.minLength(5)],
      edicionProyecto: ['', [Validators.required,Validators.minLength(5)]],
      edicionDescripcion: ['',[Validators.required, Validators.minLength(5)]]
   })

  }

  get proImg() {
    return this.editarProyectos.get('edicionImg');
  }

  get proProyecto() {
    return this.editarProyectos.get('edicionProyecto');
  }

  get proDescripcion() {
    return this.editarProyectos.get('edicionDescripcion');
  }

  ngOnInit(): void {
    this.servicio.obtenerProyectos().subscribe(data=>{
      this.proyectos=data;
      this.boton=false;
  })
}

editarPro(){
  this.editarProyectos.get('edicionImg')?.setValue(this.proyectos[this.idActual].img);
  this.editarProyectos.get('edicionProyecto')?.setValue(this.proyectos[this.idActual].proyecto);
   this.editarProyectos.get('edicionDescripcion')?.setValue(this.proyectos[this.idActual].descripcion);
}

almacenarItem(i:number){
  this.idActual=i;
  this.boton=true;
}

reiniciarForm(){
  this.ngOnInit();
}

guardarProyecto(){
  if( this.editarProyectos.valid){
  let imagen=this.editarProyectos.get("edicionImg")?.value;
  let proyecto=this.editarProyectos.get("edicionProyecto")?.value;
  let descripcion=this.editarProyectos.get("edicionDescripcion")?.value;
  

  let editarProyectos= new Proyectos(imagen,proyecto,descripcion)
  this.servicio.editarDatosProyectos(this.idActual,editarProyectos).subscribe({
    next: (data) =>{
      this.proyectos[this.idActual]=editarProyectos;
    document.getElementById('cerrarEditarProyecto')?.click();
    this.proyectos[this.idActual]['id']=this.idActual;
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
this.editarProyectos.markAllAsTouched();
}
}

eliminarProyecto(){
  this.servicio.borrarDatosProyectos(this.idActual).subscribe({
    next: (data) =>{
      console.log("se borro id:" + this.idActual);
      document.getElementById('cerrarBorrarProyectos')?.click();
      this.idActual=null;
      this.ngOnInit();
    },
  error: (error) =>{
    alert("Error al intentar borrar el elemento. Por favor intente nuevamente");
  }
})
}

}
