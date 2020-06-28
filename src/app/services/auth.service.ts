import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/Usuario';

const AUTH_API = 'https://cors-anywhere.herokuapp.com/https://redbkndspring.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user:Usuario): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      nombre:user.nombre,
      apellido:user.apellido,
      fecha_nacimiento:user.fecha_nacimiento,
      lugar_acogida:user.lugar_acogida,
      telefono:user.telefono,
      genero:user.genero
    }, httpOptions);
  }
  register_moderator(user:Usuario): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      nombre:user.nombre,
      apellido:user.apellido,
      fecha_nacimiento:user.fecha_nacimiento,
      lugar_acogida:user.lugar_acogida,
      telefono:user.telefono,
      genero:user.genero,
      role:["mod"]
    }, httpOptions);
  }

}
