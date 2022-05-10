import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any
  usuarioAutentificado:boolean=true
  constructor(private servicio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.servicio.obtenerProyectos().subscribe(data=>{
      console.log(data);
      this.proyectos=data["proyectos"];
  })
}

}
