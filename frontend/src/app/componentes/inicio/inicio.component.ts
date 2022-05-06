import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private servicio:ObtenerDatosService) { }

  ngOnInit(): void {
  }

}
