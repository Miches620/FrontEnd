import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion:any

  constructor(private servicio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.servicio.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacion=data["educacion"];
    })
  }

}
