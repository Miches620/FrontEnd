import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
hBlandas:any
hDuras:any
usuarioAutentificado:boolean=true
  constructor(private servicio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.servicio.obtenerHabilidades().subscribe(data=>{
      console.log(data);
      this.hBlandas=data["habilidades"][0]["habilidadesBlandas"];
      this.hDuras=data["habilidades"][1]["habilidadesDuras"];
    })
  }

}
