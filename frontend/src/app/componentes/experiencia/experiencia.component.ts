import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia:any
usuarioAutentificado:boolean=true
  constructor(private servicio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.servicio.obtenerExperiencia().subscribe(data=>{
      console.log(data);
      this.experiencia=data["experiencia"];
    })
  }

}
