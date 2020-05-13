import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Referente} from '../models/Referente';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReferenteService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/referentes';
  formData: Referente;

  getReferenteTrabajo() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Referente>(this.Url+"/getReferenteTrabajo");
  }

  getReferenteVivienda() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Referente>(this.Url+"/getReferenteVivienda");
  }
  getReferenteEducacion() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Referente>(this.Url+"/getReferenteEducacion");
  }
  getReferenteSalud() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Referente>(this.Url+"/getReferenteSalud");
  }
  updateHVV(historiaVidaVideo: Referente){
    return this.http.put<Referente>(this.Url+"/"+historiaVidaVideo.id_referente, historiaVidaVideo);
  }
  ///////////////////////////////////////////////////////////////
  editarReferenteTrabajo(referente: Referente){
    return this.http.put<Referente>(this.Url+"/editarReferenteTrabajo", referente);
  }
  editarReferenteVivienda(referente: Referente){
    return this.http.put<Referente>(this.Url+"/editarReferenteVivienda", referente);
  }
  editarReferenteEducacion(referente: Referente){
    return this.http.put<Referente>(this.Url+"/editarReferenteEducacion", referente);
  }
  editarReferenteSalud(referente: Referente){
    return this.http.put<Referente>(this.Url + "/editarReferenteSalud",referente);
  }

  updateTeOfrecemos(teOfrecemos: Referente){
    return this.http.put<Referente>(this.Url+"/"+teOfrecemos.id_referente, teOfrecemos);
  }
  deleteHVT(teOfrecemos: Referente){
    return this.http.delete<Referente>(this.Url+"/"+teOfrecemos.id_referente);

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }
}
