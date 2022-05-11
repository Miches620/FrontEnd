import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosEducacion {

  usuarioAutentificado:boolean=true
  constructor(private http: HttpClient) {
    console.log('el servicio esta corriendo');
  }
/*Educacion*/
  obtenerEducacion(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  }
  editarDatosEducacion(educacion:Educacion):Observable<any>{
    return this.http.post('http://localhost:3000/posts',educacion);/*sv de prueba. reemplazar*/
  }
}