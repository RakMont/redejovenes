import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Subscriber} from 'rxjs';
import { Comentario } from 'src/app/models/Comentario';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddComentarioTrabajoComponent}from 'src/app/components/comentario/trabajo/add-comentario-trabajo/add-comentario-trabajo.component';
import{EditComentarioTrabajoComponent}from 'src/app/components/comentario/trabajo/edit-comentario-trabajo/edit-comentario-trabajo.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Addlev2comentarytrabajoComponent } from '../addlev2comentarytrabajo/addlev2comentarytrabajo.component';
import { Usuario } from 'src/app/models/Usuario';
@Component({
  selector: 'app-show-comentario-trabajo',
  templateUrl: './show-comentario-trabajo.component.html',
  styleUrls: ['./show-comentario-trabajo.component.css']
})
export class ShowComentarioTrabajoComponent implements OnInit {
  comentariosRaw:Comentario[];
  comentarios:Comentario[];
  things=[];
  public photos:any=[];
  public aux2;

  public aux;

  dataSource=null;
  link;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: ComentarioService, private router: Router,private dialog: MatDialog) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);


    });
   }

  ngOnInit(): void {
    this.service.listComentariosRawTrabajo()
   .subscribe(data =>{
     this.comentariosRaw = data;


   });
   this.service.getPhotosofrawtrabajocoments()
   .subscribe(data =>{
     this.photos = data;
     this.Convertlist();

   });
   this.service.listComentariosTrabajo()
   .subscribe(data =>{
     this.comentarios = data;
   });
   this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  charge(){
    this.service.listComentariosRawTrabajo()
    .subscribe(data =>{
      this.comentariosRaw = data;

    });
    this.service.listComentariosTrabajo()
    .subscribe(data =>{
      this.comentarios = data;
    });
    }

    Convertlist(){
      let c: number = 0;

      for(let photo of this.comentariosRaw){
        console.log(photo);
        this.aux=photo.user.nombre;
        this.aux2=this.photos[c];
        console.log(this.aux);
        this.things.push({profile:this.aux2,comentario:photo.comentario,id_comentario:photo.id_comentario,nombre:this.aux,fecha:photo.fecha});
        c=c+1;
      }

    }

  edit_HVT(comentario: Comentario){
    this.service.formData=comentario;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditComentarioTrabajoComponent,dialogConfig);

   localStorage.setItem("id_HVT", comentario.id_comentario.toString());
  }

  Delete(comentario: Comentario){
    if(confirm('Estas seguro de eliminar ? ')){
      this.service.deleteHVT(comentario)
      .subscribe(data=>{
        //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
        this.charge();
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
     });
    }
   }


   Addcomentariorespuesta(id){
    this.service.formData={
      id_comentario:0,
      comentario:'',
      fecha:new Date,
      id_comentario_ref:id,
      referente:0,
      user:new Usuario
    }
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(Addlev2comentarytrabajoComponent,dialogConfig);
   }
}
