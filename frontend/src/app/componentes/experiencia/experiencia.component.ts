import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia:any
idActual:any
editarExperiencia:FormGroup
exp:any
modoEditor:any
  constructor(private servicio:ExperienciaService, private expFormBuilder: FormBuilder, private login:ObtenerDatosService) {

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
    this.login.iniciarSesion.subscribe(data =>{
      this.modoEditor=true;
    })
    this.login.cerrarSesion.subscribe(data =>{
      this.modoEditor=false;
    })
    this.servicio.obtenerExperiencia().subscribe(data=>{
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

    let editarExperiencia= new Experiencia(this.idActual,logo,empresa,puesto)
    this.servicio.editarDatosExperiencia(this.idActual,editarExperiencia).subscribe({
      next: (data) =>{
      this.experiencia[this.exp]=editarExperiencia;
      this.ngOnInit();
      document.getElementById('cerrarExperiencia')?.click();
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

  mostrarDatos(exp:Experiencia) {
    this.exp=exp;
    this.editarExperiencia.get('edicionLogo')?.setValue(exp['logo']);
    this.editarExperiencia.get('edicionEmpresa')?.setValue(exp['empresa']);
    this.editarExperiencia.get('edicionPuesto')?.setValue(exp['puesto']);
    this.idActual=exp['id'];
  }
  almacenarId(exp:Experiencia){
    this.idActual=exp['id'];
  }

  eliminar(){
    this.servicio.borrarDatosExperiencia(this.idActual).subscribe({
      next: (data) =>{
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
