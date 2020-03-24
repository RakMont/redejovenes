import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoriaVidaVideo } from '../models/HistoriaVidaVideo';

@Injectable({
  providedIn: 'root'
})
export class HistoriaVidaVideoService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/historiasHVV';

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
}
