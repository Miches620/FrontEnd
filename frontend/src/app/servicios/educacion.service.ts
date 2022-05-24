import { Injectable } from '@angular/core';
import { Educacion } from '../entidades/educacion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string="http://localhost:8080/educacion"
  constructor(private http: HttpClient) { }

  /*Educacion*/
  obtenerEducacion(): Observable<any> {
    return this.http.get(this.url+'/mostrar');
  }
  editarDatosEducacion(id:number,educacion:Educacion):Observable<any>{
    return this.http.put(this.url+'/editar/'+id,educacion);
  }

  borrarDatosEducacion(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
