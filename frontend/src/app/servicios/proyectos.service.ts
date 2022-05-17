import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../entidades/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  /*Proyectos*/
  obtenerProyectos():Observable<any> {
    return this.http.get('http://localhost:3000/proyectos/');
  }
  editarDatosProyectos(id:number,proyecto:Proyectos):Observable<any>{
    return this.http.put('http://localhost:3000/proyectos/'+id,proyecto);/*sv de prueba. reemplazar*/
  }

  borrarDatosProyectos(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/proyectos/'+id);
  }
}
