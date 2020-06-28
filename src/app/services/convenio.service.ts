import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convenio } from '../models/Convenio';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import { historiaVidaTexto } from '../models/historiaVidaTexto-model';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  constructor(private http: HttpClient) { }
  Url = 'https://cors-anywhere.herokuapp.com/https://redbkndspring.herokuapp.com/convenios';
  formData:Convenio;
  ConvImage: any=File;

  saveConvenioFile(formData:FormData):Observable<any>{
    return this.http.post('http://localhost:8090/convenios/saveConvenioFile',formData);
  }

  UpdateConvenioFile(formData:FormData):Observable<any>{

    return this.http.post('http://localhost:8090/convenios/UpdateConvenioFile', formData);
  }


  getConvenios():Observable<any>{
    return this.http.get('http://localhost:8090/convenios/getConvenios');

  }

  getConv() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Convenio[]>(this.Url);
  }
  createConvenio(convenio: Convenio){
    return this.http.post<Convenio>(this.Url, convenio);
  }

  getHVAId(id_convenio:number){
    return this.http.get<Convenio>(this.Url + "/" + id_convenio);
  }


  deleteConvenio(convenio: Convenio){
    return this.http.delete<Convenio>(this.Url+"/"+convenio.id_convenio);

  }

    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy:string){
      this._listeners.next(filterBy);
    }

}
