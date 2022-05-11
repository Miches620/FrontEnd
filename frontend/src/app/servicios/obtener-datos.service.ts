import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona} from '../entidades/persona';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosService {

  usuarioAutentificado:boolean=false
  constructor(private http: HttpClient) {
    console.log('el servicio esta corriendo');
  }

  obtenerEducacion(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  }

  obtenerExperiencia(): Observable<any> {
    return this.http.get('./assets/data/experiencia.json');
  }

  obtenerHabilidades(): Observable<any> {
    return this.http.get('./assets/data/habilidades.json');
  }

  obtenerProyectos(): Observable<any> {
    return this.http.get('./assets/data/proyectos.json');
  }

  obtenerLogin(): Observable<any> {
    return this.http.get('./assets/data/login.json');
  }
}
