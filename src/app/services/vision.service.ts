import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vision } from '../models/Vision';
@Injectable({
  providedIn: 'root'
})
export class VisionService {

  constructor(private http: HttpClient) { }
  Url = 'https://redbkndspring.herokuapp.com/visiones';
  formData: Vision;
  getVision() {
    // obtengo todos los datos de esta url que hace ref a backend
    return this.http.get<Vision[]>(this.Url);
  }
  createVision(vision: Vision){
    return this.http.post<Vision>(this.Url, vision);
  }

  getVisionId(id_vision:number){
    return this.http.get<Vision>(this.Url + "/" + id_vision);
  }

  updateVision(vision: Vision){
    return this.http.put<Vision>(this.Url+"/"+vision.id_vision, vision);
  }
}
