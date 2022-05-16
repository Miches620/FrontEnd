import { Injectable } from '@angular/core';
import { Experiencia } from '../entidades/experiencia';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  /*Experiencia*/
  obtenerExperiencia(): Observable<any> {
    return this.http.get('http://localhost:3000/experiencia/');
  }
  editarDatosExperiencia(id:number,experiencia:Experiencia):Observable<any>{
    return this.http.put('http://localhost:3000/experiencia/'+id,experiencia);/*sv de prueba. reemplazar*/
  }

  borrarDatosExperiencia(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/experiencia/'+id);
  }
}
