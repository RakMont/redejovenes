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
  Url = 'https://cors-anywhere.herokuapp.com/https://redbkndspring.herokuapp.com/api/auth/';
  formData:Usuario;
  getUserProfile(id:number){
    return this.http.get<Usuario>(this.Url + "/getprofile" + id);
  }
  private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }
}



