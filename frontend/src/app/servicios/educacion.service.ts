import { Injectable } from '@angular/core';
import { Educacion } from '../entidades/educacion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  /*AcercaDe*/
  obtenerEducacion(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  }
  editarDatosEducacion(educacion:Educacion):Observable<any>{
    return this.http.post('http://localhost:3000/posts',educacion);/*sv de prueba. reemplazar*/
  }
}
