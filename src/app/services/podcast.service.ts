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
  Url = 'https://secondbackend.herokuapp.com/podcasts';
  formData:Podcast;
  hvaAudio: any=File;
  public podcasts:Podcast[];
  public audios:any=[];


  savePodcast(formData:FormData):Observable<any>{
    return this.http.post(this.Url+'/savePodcastFile',formData);
  }

  UpdatePodcastFile(formData:FormData):Observable<any>{
    //let hva: HistoriaVidaAudio;

    return this.http.post(this.Url+'/UpdatePodcastFile', formData);
  }


  getPodcastAllAudios():Observable<any>{
    this.audios=this.http.get(this.Url+'/getPodcastAllAudios');
    return this.http.get(this.Url+'/getPodcastAllAudios');

  }
  getPodcastAudiosByTema(id_tema:number):Observable<any>{
    return this.http.get(this.Url+'/getPodcastAudiosByTema/'+ id_tema);

  }
  getPodcast() {
    // obtengo todos los datos de esta url que hace ref a backend
   // this.podcasts=this.http.get<Podcast[]>(this.Url);
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
