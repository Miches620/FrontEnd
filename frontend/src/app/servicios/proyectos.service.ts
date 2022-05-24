import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../entidades/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url:string="http://localhost:8080/proyectos"
  constructor(private http: HttpClient) { }

  /*Proyectos*/
  obtenerProyectos():Observable<any> {
    return this.http.get(this.url+'/mostrar');
  }
  editarDatosProyectos(id:number,proyecto:Proyectos):Observable<any>{
    return this.http.put(this.url+'/editar/'+id,proyecto);
  }

  borrarDatosProyectos(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
