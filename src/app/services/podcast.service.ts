import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Podcast } from '../models/Podcast';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import { historiaVidaTexto } from '../models/historiaVidaTexto-model';
@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8090/podcasts';
  formData:Podcast;
  hvaAudio: any=File;

  savePodcast(formData:FormData):Observable<any>{
    return this.http.post('http://localhost:8090/podcasts/savePodcastFile',formData);
  }

  updateHVT(formData:FormData):Observable<any>{
    //let hva: HistoriaVidaAudio;

    return this.http.post('http://localhost:8090/podcasts/UpdateAudioFile', formData);
  }


  getPodcastAllAudios():Observable<any>{
    return this.http.get('http://localhost:8090/podcasts/getPodcastAllAudios');

  }
  getPodcastAudiosByTema(id_tema:number):Observable<any>{
    return this.http.get('http://localhost:8090/podcasts/getPodcastAudiosByTema/'+ id_tema);

  }
  getPodcast() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Podcast[]>(this.Url);
  }
  getPodcastByTema(id_tema:number) {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Podcast[]>(this.Url+"/listarByEspecie/"+id_tema);
  }
  createPodcast(historiaVidaAudio: Podcast){
    return this.http.post<Podcast>(this.Url, historiaVidaAudio);
  }

  getPodcastId(id_podcast:number){
    return this.http.get<Podcast>(this.Url + "/" + id_podcast);
  }


  deletePodcast(podcast: Podcast){
    return this.http.delete<Podcast>(this.Url+"/"+podcast.id_podcast);

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }
}
