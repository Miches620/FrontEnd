import { Injectable } from '@angular/core';
import { Habilidades } from '../entidades/habilidades';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  url1:string="http://localhost:8080/hBlandas"
  url2:string="http://localhost:8080/hDuras"
  constructor(private http: HttpClient) { }

  /*Habilidades*/
  obtenerHabilidadesBlandas(): Observable<any> {
    return this.http.get(this.url1+'/mostrar');
  }

  obtenerHabilidadesDuras(): Observable<any> {
    return this.http.get(this.url2+'/mostrar');
  }
  editarHBlandas(id:number,habilidades:Habilidades):Observable<any>{
    return this.http.put(this.url1+'/editar/'+id,habilidades);
  }

  editarHDuras(id:number,habilidades:Habilidades):Observable<any>{
    return this.http.put(this.url2+'/editar/'+id,habilidades);
  }
  borrarHBlandas(id:number):Observable<any>{
    return this.http.delete(this.url1+'/'+id);
  }
  borrarHDuras(id:number):Observable<any>{
    return this.http.delete(this.url2+'/'+id);
  }
}
