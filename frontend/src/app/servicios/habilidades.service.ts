import { Injectable } from '@angular/core';
import { Habilidades } from '../entidades/habilidades';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http: HttpClient) { }

  /*Habilidades*/
  obtenerHabilidadesBlandas(): Observable<any> {
    return this.http.get('http://localhost:3000/habilidadesBlandas');
  }

  obtenerHabilidadesDuras(): Observable<any> {
    return this.http.get('http://localhost:3000/habilidadesDuras');
  }
  editarHBlandas(id:number,habilidades:Habilidades):Observable<any>{
    return this.http.put('http://localhost:3000/habilidadesBlandas/'+id,habilidades);/*sv de prueba. reemplazar*/
  }

  editarHDuras(id:number,habilidades:Habilidades):Observable<any>{
    return this.http.put('http://localhost:3000/habilidadesDuras/'+id,habilidades);/*sv de prueba. reemplazar*/
  }
  borrarHBlandas(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/habilidadesBlandas/'+id);
  }
  borrarHDuras(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/habilidadesDuras/'+id);
  }
}
