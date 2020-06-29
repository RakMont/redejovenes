import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { historiaVidaTexto } from '../models/historiaVidaTexto-model';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoriaVidaTextoService {

  constructor(private http: HttpClient) { }
  Url = 'https://secondbackend.herokuapp.com//historiasHVT';
  formData:historiaVidaTexto;
  getHVT() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<historiaVidaTexto[]>(this.Url);
  }
  createHVT(historiaVidaTexto: historiaVidaTexto){
    return this.http.post<historiaVidaTexto>(this.Url, historiaVidaTexto);
  }

  getHVTId(id_HVT:number){
    return this.http.get<historiaVidaTexto>(this.Url + "/" + id_HVT);
  }

  updateHVT(historiaVidaTexto: historiaVidaTexto){
    return this.http.put<historiaVidaTexto>(this.Url+"/"+historiaVidaTexto.id_HVT, historiaVidaTexto);
  }
  deleteHVT(historiaVidaTexto: historiaVidaTexto){
    return this.http.delete<historiaVidaTexto>(this.Url+"/"+historiaVidaTexto.id_HVT);

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }



}
