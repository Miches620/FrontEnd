import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Habilidades } from 'src/app/entidades/habilidades';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
hBlandas:any
hDuras:any
habilidades:any
idActual:any
boton:boolean=false
editarHabilidades:FormGroup

  constructor(private servicio:HabilidadesService,private habFormBuilder: FormBuilder) { 

    this.editarHabilidades = this.habFormBuilder.group({
      edicionHabilidad: ['',[Validators.required, Validators.minLength(5)]],
      edicionPorcentaje: ['', [Validators.required,Validators.minLength(2),Validators.min(25),Validators.maxLength(3), Validators.max(100)]]
   })

  }

  get habHabilidad() {
    return this.editarHabilidades.get('edicionHabilidad');
  }

  get habPorcentaje() {
    return this.editarHabilidades.get('edicionPorcentaje');
  }

  ngOnInit(): void {
    this.servicio.obtenerHabilidadesBlandas().subscribe(data=>{
      
      for(let item of data){
        item['posicion']=data.indexOf(item);
     }
     this.hBlandas=data
   })

    this.servicio.obtenerHabilidadesDuras().subscribe(data=>{
        
    for(let item of data){
      item['posicion']=data.indexOf(item);
    }
    this.hDuras=data
    
   })
    this.boton=false;
  }

  guardarCambiosHBlandas(){
    if( this.editarHabilidades.valid){
    let habilidad=this.editarHabilidades.get("edicionHabilidad")?.value;
    let porcentaje=this.editarHabilidades.get("edicionPorcentaje")?.value;
    let posicion=this.hBlandas[this.idActual].posicion;

    let editarHabilidades= new Habilidades(habilidad, porcentaje,posicion)
    this.servicio.editarHBlandas(this.idActual,editarHabilidades).subscribe({
      next: (data) =>{
        this.hBlandas[this.idActual]=editarHabilidades;
      document.getElementById('cerrarEditarHabilidadBlanda')?.click();
      this.hBlandas[this.idActual]['id']=this.idActual;
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
  this.editarHabilidades.markAllAsTouched();
}
  }

  guardarCambiosHDuras(){
    if( this.editarHabilidades.valid){
    let habilidad=this.editarHabilidades.get("edicionHabilidad")?.value;
    let porcentaje=this.editarHabilidades.get("edicionPorcentaje")?.value;
    let posicion=this.hDuras[this.idActual].posicion;

    let editarHabilidades= new Habilidades(habilidad, porcentaje,posicion)
    this.servicio.editarHDuras(this.idActual,editarHabilidades).subscribe({
      next: (data) =>{
        this.hDuras[this.idActual]=editarHabilidades;
      document.getElementById('cerrarEditarHabilidadDura')?.click();
      this.hDuras[this.idActual]['id']=this.idActual;
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
  this.editarHabilidades.markAllAsTouched();
}
  }

  reiniciarForm(){
    this.ngOnInit();
  }

  eliminarHBlandas(){
    this.servicio.borrarHBlandas(this.idActual).subscribe({
      next: (data) =>{
        document.getElementById('cerrarBorrarHBlandas')?.click();
        this.idActual=null;
        this.ngOnInit();
      },
    error: (error) =>{
      alert("Error al intentar borrar el elemento. Por favor intente nuevamente");
    }
  })
  }

  eliminarHDuras(){
    this.servicio.borrarHDuras(this.idActual).subscribe({
      next: (data) =>{
        document.getElementById('cerrarBorrarHDuras')?.click();
        this.idActual=null;
        this.ngOnInit();
      },
    error: (error) =>{
      alert("Error al intentar borrar el elemento. Por favor intente nuevamente");
    }
  })
  }

almacenarItem(i:number){
this.idActual=i;
this.boton=true;
  }


  editarHDurasItem(){
    this.editarHabilidades.get('edicionHabilidad')?.setValue(this.hDuras[this.idActual].habilidad);
    this.editarHabilidades.get('edicionPorcentaje')?.setValue(this.hDuras[this.idActual].porcentaje);
  }

  editarHBlandasItem(){
    this.editarHabilidades.get('edicionHabilidad')?.setValue(this.hBlandas[this.idActual].habilidad);
    this.editarHabilidades.get('edicionPorcentaje')?.setValue(this.hBlandas[this.idActual].porcentaje);
  }
}
