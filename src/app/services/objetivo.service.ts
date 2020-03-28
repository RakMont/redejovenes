import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Objetivos } from '../models/Objetivos';
@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/objetivos';
  formData: Objetivos;
  getObjetivos() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Objetivos[]>(this.Url);
  }
  createObjetivos(objetivos: Objetivos){
    return this.http.post<Objetivos>(this.Url, objetivos);
  }

  getObjetivoId(id_objetivos:number){
    return this.http.get<Objetivos>(this.Url + "/" + id_objetivos);
  }

  updateObjetivo(objetivos: Objetivos){
    return this.http.put<Objetivos>(this.Url+"/"+objetivos.id_objetivos, objetivos);
  }
}
