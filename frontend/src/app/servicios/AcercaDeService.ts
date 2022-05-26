import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosAcercaDe {
url:string="https://argentinaprograma-backend.herokuapp.com/persona"
  constructor(private http: HttpClient) {
  
  }
/*AcercaDe*/
  obtenerAcercaDe(id:number): Observable<any> {
    return this.http.get(this.url+'/'+id);
  }
  editarDatosAcercaDe(persona:Persona):Observable<any>{
    return this.http.put(this.url+'/editar/'+1, persona);
  }
 
}