import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../entidades/login';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosService {
  @Output() iniciarSesion: EventEmitter<any> = new EventEmitter()
  @Output() cerrarSesion: EventEmitter<any> = new EventEmitter()
url:string="https://argentinaprograma-backend.herokuapp.com/login"
  constructor(private http: HttpClient) {
  }

  obtenerAccesoDeEditor(login:Login):Observable<any>{
    return this.http.post(this.url,login);
  }
}
