import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosAcercaDe {

  usuarioAutentificado:boolean=false
  constructor(private http: HttpClient) {
  
  }
/*AcercaDe*/
  obtenerAcercaDe(): Observable<any> {
    return this.http.get('./assets/data/acercaDe.json');
  }
  editarDatosAcercaDe(persona:Persona):Observable<any>{
    return this.http.post('http://localhost:3000/posts',persona);/*sv de prueba. reemplazar*/
  }
}