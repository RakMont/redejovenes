import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Mision } from '../models/Mision';
@Injectable({
  providedIn: 'root'
})
export class MisionService {
  // producto:Producto
  constructor(private http: HttpClient) { }

  Url = 'https://secondbackend.herokuapp.com/misiones';


  formData: Mision;
  getMision() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Mision[]>(this.Url);
  }
  createMision(mision: Mision){
    return this.http.post<Mision>(this.Url, mision);
  }

  getMisionId(id_mision:number){
    return this.http.get<Mision>(this.Url + "/" + id_mision);
  }

  updateMision(mision: Mision){
    return this.http.put<Mision>(this.Url+"/"+mision.id_mision, mision);
  }

}
