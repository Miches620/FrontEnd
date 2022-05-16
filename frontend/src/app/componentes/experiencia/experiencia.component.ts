import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/entidades/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia:any
usuarioAutentificado:boolean=true
idActual:any
editarExperiencia:FormGroup
  constructor(private servicio:ExperienciaService, private expFormBuilder: FormBuilder) {

    this.editarExperiencia = this.expFormBuilder.group({
      edicionLogo: ['./assets/imagenes/????', Validators.minLength(5)],
      edicionEmpresa: ['', [Validators.required,Validators.minLength(3)]],
      edicionPuesto: ['',[Validators.required,Validators.minLength(5)]],    
   })
  }

  get expLogo() {
    return this.editarExperiencia.get('edicionLogo');
  }

  get expEmpresa() {
    return this.editarExperiencia.get('edicionEmpresa');
  }

  get expPuesto() {
    return this.editarExperiencia.get('edicionPuesto');
  }


  ngOnInit(): void {
    this.servicio.obtenerExperiencia().subscribe(data=>{
      
      for(let item of data){
        item['posicion']=data.indexOf(item);
     }
      this.experiencia=data;
    })
  }

  limpiarFormulario() {
    this.editarExperiencia.reset();
  }

  guardarCambios(){
    if( this.editarExperiencia.valid){
    let logo=this.editarExperiencia.get("edicionLogo")?.value;
    let empresa=this.editarExperiencia.get("edicionEmpresa")?.value;
    let puesto=this.editarExperiencia.get("edicionPuesto")?.value;

    let editarExperiencia= new Experiencia(logo,empresa,puesto)
    this.servicio.editarDatosExperiencia(this.idActual,editarExperiencia).subscribe({
      next: (data) =>{
      this.experiencia[this.idActual]=editarExperiencia;
      document.getElementById('cerrarExperiencia')?.click();
      this.experiencia[this.idActual]['id']=this.idActual;
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
  this.editarExperiencia.markAllAsTouched();
}
  }

  mostrarDatos(i:number) {
    this.editarExperiencia.get('edicionIcono')?.setValue(this.experiencia[i].icono);
    this.editarExperiencia.get('edicionTitulo')?.setValue(this.experiencia[i].titulo);
    this.editarExperiencia.get('edicionInstitucion')?.setValue(this.experiencia[i].institucion);
    this.editarExperiencia.get('edicionAnio')?.setValue(this.experiencia[i].anio);
     this.editarExperiencia.get('edicionWeb')?.setValue(this.experiencia[i].web);
     this.idActual=this.experiencia[i]['id'];
  }

  almacenarPosicion(i:number){
    this.idActual=this.experiencia[i]['id'];
    console.log(this.idActual);
  }

  eliminar(){
    this.servicio.borrarDatosExperiencia(this.idActual).subscribe({
      next: (data) =>{
        console.log("se borro id:" + this.idActual);
        document.getElementById('cerrarBorrarExperiencia')?.click();
        this.idActual=null;
      this.ngOnInit();
      },
    error: (error) =>{
      alert("Error al intentar borrar el elemento. Por favor intente nuevamente");
    }
  })
  }

}
