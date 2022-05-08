import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona:any
usuarioAutentificado:boolean=false
  constructor(private servicio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.servicio.obtenerAcercaDe().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

}
