import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Objetivos } from '../models/Objetivos';
@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {

  constructor(private http: HttpClient) { }
  Url = 'https://cors-anywhere.herokuapp.com/https://redbkndspring.herokuapp.com/objetivos';
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
