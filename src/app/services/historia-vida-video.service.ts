import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoriaVidaVideo } from '../models/HistoriaVidaVideo';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoriaVidaVideoService {

  constructor(private http: HttpClient) { }
  Url = 'https://secondbackend.herokuapp.com/historiasHVV';
  formData:HistoriaVidaVideo;
  getHVV() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<HistoriaVidaVideo[]>(this.Url);
  }
  createHVV(historiaVidaVideo: HistoriaVidaVideo){
    return this.http.post<HistoriaVidaVideo>(this.Url, historiaVidaVideo);
  }

  getHVVId(id_HVT:number){
    return this.http.get<HistoriaVidaVideo>(this.Url + "/" + id_HVT);
  }

  updateHVV(historiaVidaVideo: HistoriaVidaVideo){
    return this.http.put<HistoriaVidaVideo>(this.Url+"/"+historiaVidaVideo.id_HVV, historiaVidaVideo);
  }
  deleteHVV(historiaVidaVideo: HistoriaVidaVideo){
    return this.http.delete<HistoriaVidaVideo>(this.Url+"/"+historiaVidaVideo.id_HVV);

  }
  private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }
}
