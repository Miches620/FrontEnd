import { Injectable } from '@angular/core';
import { Educacion } from '../entidades/educacion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  /*Educacion*/
  obtenerEducacion(): Observable<any> {
    return this.http.get('http://localhost:3000/educacion/');
  }
  editarDatosEducacion(id:number,educacion:Educacion):Observable<any>{
    return this.http.put('http://localhost:3000/educacion/'+id,educacion);/*sv de prueba. reemplazar*/
  }

  borrarDatosEducacion(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/educacion/'+id);
  }
}
