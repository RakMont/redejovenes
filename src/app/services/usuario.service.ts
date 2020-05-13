import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';
import { Usuario } from '../models/Usuario';

import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/temas';
  formData:Usuario;
  getTema() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Tema[]>(this.Url);
  }
  createTema(tema: Tema){
    return this.http.post<Tema>(this.Url, tema);
  }

  getTemaId(id_tema:number){
    return this.http.get<Tema>(this.Url + "/" + id_tema);
  }

  updateTema(tema: Tema){
    return this.http.put<Tema>(this.Url+"/"+tema.id_tema, tema);
  }
  deleteTema(tema: Tema){
    return this.http.delete<Tema>(this.Url+"/"+tema.id_tema);

  }
  private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }
}



