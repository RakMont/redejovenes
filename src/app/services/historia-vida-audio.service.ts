import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoriaVidaAudio } from '../models/HistoriaVidaAudio';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import { historiaVidaTexto } from '../models/historiaVidaTexto-model';

@Injectable({
  providedIn: 'root'
})
export class HistoriaVidaAudioService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/historiasHVA';
  formData:HistoriaVidaAudio;
  hvaAudio: any=File;

  saveAudio(formData:FormData):Observable<any>{
    return this.http.post('http://localhost:8090/historiasHVA/saveAudioFile',formData);
  }

  updateHVT(formData:FormData):Observable<any>{
    //let hva: HistoriaVidaAudio;

    return this.http.post('http://localhost:8090/historiasHVA/UpdateAudioFile', formData);
  }
  /*updateHVT(formData:FormData):Observable<any>{
    let hva: HistoriaVidaAudio;

    return this.http.put<HistoriaVidaAudio>(this.Url+"/"+formData.id_HVA, formData);
  } */
  /*
  getHVAAudios():any{
    return this.http.get('http://localhost:8090/historiasHVA/getHVAAudios');

  }*/

getHVAAudios():Observable<any>{
    return this.http.get('http://localhost:8090/historiasHVA/getHVAAudios');

  }

  getHVA() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<HistoriaVidaAudio[]>(this.Url);
  }
  createHVA(historiaVidaAudio: HistoriaVidaAudio){
    return this.http.post<HistoriaVidaAudio>(this.Url, historiaVidaAudio);
  }

  getHVAId(id_HVA:number){
    return this.http.get<HistoriaVidaAudio>(this.Url + "/" + id_HVA);
  }


  deleteHVT(historiaVidaAudio: HistoriaVidaAudio){
    return this.http.delete<HistoriaVidaAudio>(this.Url+"/"+historiaVidaAudio.id_HVA);

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }

}
