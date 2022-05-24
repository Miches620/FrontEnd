import { Injectable } from '@angular/core';
import { Experiencia } from '../entidades/experiencia';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:string="http://localhost:8080/experiencia"
  constructor(private http: HttpClient) { }

  /*Experiencia*/
  obtenerExperiencia(): Observable<any> {
    return this.http.get(this.url+'/mostrar');
  }
  editarDatosExperiencia(id:number,experiencia:Experiencia):Observable<any>{
    return this.http.put(this.url+'/editar/'+id,experiencia);
  }

  borrarDatosExperiencia(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
