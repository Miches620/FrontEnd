import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login} from '../entidades/login';  

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosService {

  constructor(private http: HttpClient) {
  }

  obtenerLogin(): Observable<any> {
    return this.http.get('http://localhost:3000/login');
  }

  editarLogin(estado: Login):Observable<any>{
    return this.http.post('http://localhost:3000/login',estado)
  }
}
