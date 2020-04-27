import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeOfrecemos } from '../models/TeOfrecemos';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeofrecemosService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/teOfrecemos';
  formData: TeOfrecemos;


  getTeOfrecemosBeca() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<TeOfrecemos[]>(this.Url+"/becas");
  }
  getTeOfrecemosTrabajo() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<TeOfrecemos[]>(this.Url+"/trabajos");
  }
  getTeOfrecemosVivienda() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<TeOfrecemos[]>(this.Url+"/viviendas");
  }
  createTeOfrecemosBeca(teOfrecemos: TeOfrecemos){
    return this.http.post<TeOfrecemos>(this.Url+"/beca", teOfrecemos);
  }
  createTeOfrecemosTrabajo(teOfrecemos: TeOfrecemos){
    return this.http.post<TeOfrecemos>(this.Url+"/trabajo", teOfrecemos);
  }
  createTeOfrecemosVivienda(teOfrecemos: TeOfrecemos){
    return this.http.post<TeOfrecemos>(this.Url+"/vivienda", teOfrecemos);
  }
  getTeOfrecemosId(id_teOfrecemos:number){
    return this.http.get<TeOfrecemos>(this.Url + "/" + id_teOfrecemos);
  }

  updateTeOfrecemos(teOfrecemos: TeOfrecemos){
    return this.http.put<TeOfrecemos>(this.Url+"/"+teOfrecemos.id_teOfrecemos, teOfrecemos);
  }
  deleteHVT(teOfrecemos: TeOfrecemos){
    return this.http.delete<TeOfrecemos>(this.Url+"/"+teOfrecemos.id_teOfrecemos);

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }


}
