import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import{Subject}from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL = 'https://secondbackend.herokuapp.com/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData:Usuario;

  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserProfile(username:String){
    return this.http.get<Usuario>(API_URL + 'getprofile/'+username);
  }
  getAllusers(){
    return this.http.get<Usuario[]>(API_URL + 'getallusers/');
    //return this.http.get<Tema[]>(this.Url);
  }
  getAllModerators(){
    return this.http.get<Usuario[]>(API_URL + 'getallmoderator/');
    //return this.http.get<Tema[]>(this.Url);
  }
  saveProfilePhoto(formData:FormData):Observable<any>{
    return this.http.post(API_URL+'UpdateUserFile',formData);
  }
  getprofile(username:String):Observable<any>{
    return this.http.get(API_URL+'getprofilephoto/'+username);

  }
  getAllusersphoto():Observable<any>{
    return this.http.get(API_URL+'getUsersPhotos/');

  }
  getAllmoderatorsphoto():Observable<any>{
    return this.http.get(API_URL+'getModersPhotos/');

  }

  editProfile(user:Usuario): Observable<any>{
  // return this.http.put<historiaVidaTexto>(this.Url+"/"+historiaVidaTexto.id_HVT, historiaVidaTexto);

    return this.http.post(API_URL + 'updateprofile',{
      id:user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      nombre:user.nombre,
      apellido:user.apellido,
      fecha_nacimiento:user.fecha_nacimiento,
      lugar_acogida:user.lugar_acogida,
      telefono:user.telefono,
      genero:user.genero,
      perfil:user.perfil,


    }, httpOptions);
  }
  updateprofilemoderator(user:Usuario): Observable<any>{
    // return this.http.put<historiaVidaTexto>(this.Url+"/"+historiaVidaTexto.id_HVT, historiaVidaTexto);

      return this.http.post(API_URL + 'updateprofilemoderator',{
        id:user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        nombre:user.nombre,
        apellido:user.apellido,
        fecha_nacimiento:user.fecha_nacimiento,
        lugar_acogida:user.lugar_acogida,
        telefono:user.telefono,
        genero:user.genero,
        perfil:user.perfil,


      }, httpOptions);
    }
    updateprofileadmin(user:Usuario): Observable<any>{
      // return this.http.put<historiaVidaTexto>(this.Url+"/"+historiaVidaTexto.id_HVT, historiaVidaTexto);

        return this.http.post(API_URL + 'updateprofileadmin',{
          id:user.id,
          username: user.username,
          email: user.email,
          password: user.password,
          nombre:user.nombre,
          apellido:user.apellido,
          fecha_nacimiento:user.fecha_nacimiento,
          lugar_acogida:user.lugar_acogida,
          telefono:user.telefono,
          genero:user.genero,
          perfil:user.perfil,


        }, httpOptions);
      }
  deleteHVT(user:Usuario){
    return this.http.delete<Usuario>(API_URL+'deleteuser/'+user.username);

  }

  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }
}
