import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/Comentario';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }
  Url = 'https://secondbackend.herokuapp.com/comentarios';
  //Url = 'http://localhost:8090/comentarios';
  formData:Comentario;

  listComentariosRawTrabajo() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosRawTrabajo");
  }
  listComentariosTrabajo() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosTrabajo");
  }


  getPhotosofrawviviendacoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosofrawviviendacoments/');

  }

  getPhotosofrawtrabajocoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosofrawtrabajocoments/');

  }
  getPhotosofrawsaludcoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosofrawsaludcoments/');

  }
  getPhotosofraweducacioncoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosofraweducacioncoments/');

  }

  listComentariosRawVivienda() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosRawVivienda");
  }
  listComentariosVivienda() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosVivienda");
  }



  listComentariosRawEducacion() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosRawEducacion");
  }
  listComentariosEducacion() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosEducacion");
  }




  listComentariosRawSalud() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosRawSalud");
  }
  listComentariosSalud() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url+"/listComentariosSalud");
  }


  agregarComentarioTrabajo(comentario: Comentario){
    return this.http.post<Comentario>(this.Url+"/agregarComentarioTrabajo", comentario);
  }

  agregarComentarioVivienda(comentario: Comentario){
    return this.http.post<Comentario>(this.Url+"/agregarComentarioVivienda", comentario);
  }


  agregarComentarioEducacion(comentario: Comentario){
    return this.http.post<Comentario>(this.Url+"/agregarComentarioEducacion", comentario);
  }

  agregarComentarioSalud(comentario: Comentario){
    return this.http.post<Comentario>(this.Url+"/agregarComentarioSalud", comentario);
  }

  editarComentarioTrabajo(comentario: Comentario){
    return this.http.put<Comentario>(this.Url + "/editarComentarioTrabajo",comentario);
  }

  editarComentarioVivienda(comentario: Comentario){
    return this.http.put<Comentario>(this.Url + "/editarComentarioVivienda",comentario);
  }
  editarComentarioEducacion(comentario: Comentario){
    return this.http.put<Comentario>(this.Url + "/editarComentarioEducacion",comentario);
  }
  editarComentarioSalud(comentario: Comentario){
    return this.http.put<Comentario>(this.Url + "/editarComentarioSalud",comentario);
  }
  getHVT() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Comentario[]>(this.Url);
  }
  createHVT(comentario: Comentario){
    return this.http.post<Comentario>(this.Url, comentario);
  }

  getHVTId(id_HVT:number){
    return this.http.get<Comentario>(this.Url + "/" + id_HVT);
  }

  updateHVT(comentario: Comentario){
    return this.http.put<Comentario>(this.Url+"/"+comentario.id_comentario, comentario);
  }
  deletecomentario(comentario: Comentario){
    return this.http.delete<Comentario>(this.Url+"/"+comentario.id_comentario);

  }
  getPhotosofviviendacoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosofviviendacoments/');

  }

  getPhotosoftrabajocoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosoftrabajocoments/');

  }
  getPhotosofsaludcoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotososaludcoments/');

  }
  getPhotosofeducacioncoments():Observable<any>{
    return this.http.get(this.Url+'/getPhotosofeducacioncoments/');

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }

}
