import { Usuario } from './Usuario';

export class Comentario{
  id_comentario : number;
  comentario : string;
  fecha : Date;
  user:Usuario;
  id_comentario_ref : number;
  referente:number;

}
