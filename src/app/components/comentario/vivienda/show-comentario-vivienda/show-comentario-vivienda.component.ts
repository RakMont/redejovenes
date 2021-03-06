import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Subscriber} from 'rxjs';
import { Comentario } from 'src/app/models/Comentario';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddComentarioViviendaComponent}from 'src/app/components/comentario/vivienda/add-comentario-vivienda/add-comentario-vivienda.component';
import{EditComentarioViviendaComponent}from 'src/app/components/comentario/vivienda/edit-comentario-vivienda/edit-comentario-vivienda.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Addlev2comentaryviviendaComponent } from '../addlev2comentaryvivienda/addlev2comentaryvivienda.component';
import { Usuario } from 'src/app/models/Usuario';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-show-comentario-vivienda',
  templateUrl: './show-comentario-vivienda.component.html',
  styleUrls: ['./show-comentario-vivienda.component.css']
})
export class ShowComentarioViviendaComponent implements OnInit {

  /*comentariosRaw:Comentario[];
  comentarios:Comentario[];*/
  public comentariosRaw:any[]
  public comentarios:any[]
  things=[];
  things2=[];

  public photos:any=[];
  public photos2:any[];
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
    this.service.listComentariosRawVivienda()
   .subscribe(data =>{
     this.comentariosRaw = data;

   });
    this.service.getPhotosofrawviviendacoments()
   .subscribe(data =>{
     this.photos = data;
     this.Convertlist();
    });
    this.service.listComentariosVivienda()
   .subscribe(data =>{
     this.comentarios = data;
   });
    this.service.getPhotosofviviendacoments()
   .subscribe(data =>{
     this.photos2 = data;
     this.Convertlist2();
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
    this.service.listComentariosRawVivienda()
   .subscribe(data =>{
     this.comentariosRaw = data;
   });
   this.service.listComentariosVivienda()
   .subscribe(data =>{
     this.comentarios = data;
   });
    }

    Convertlist(){
      let c: number = 0;
      let vec;
      let a;
      for(let photo of this.comentariosRaw){
       //console.log(photo.userProfileResponse);
       if(photo.userProfileResponse.roles.includes('ROLE_ADMIN') || photo.userProfileResponse.roles.includes('ROLE_MODERATOR')){
         this.aux='Administrador';
       }
       else{
         this.aux='Usuario Registrado';
       }
       this.aux2=this.photos[c];
       this.things.push({role:this.aux,profile:this.aux2,comentario:photo.comentario,id_comentario:photo.id_comentario,nombre:photo.userProfileResponse.nombre,username:photo.userProfileResponse.username,fecha:photo.fecha});
       c = c + 1;

      }

    }
    Convertlist2(){
      let c: number = 0;
      for(let photo of this.comentarios){
        if(photo.userProfileResponse.roles.includes('ROLE_ADMIN') || photo.userProfileResponse.roles.includes('ROLE_MODERATOR')){
          this.aux='Administrador';
        }
        else{
          this.aux='Usuario Registrado';
        }
        this.aux2=this.photos2[c];
        this.things2.push({role:this.aux,id_comentario_ref:photo.id_comentario_ref,profile:this.aux2,comentario:photo.comentario,id_comentario:photo.id_comentario,username:photo.userProfileResponse.username,nombre:photo.userProfileResponse.nombre,fecha:photo.fecha});
        c=c+1;


      }

    }
  edit_HVT(comentario: Comentario){
    this.service.formData=comentario;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditComentarioViviendaComponent,dialogConfig);

   localStorage.setItem("id_HVT", comentario.id_comentario.toString());
  }

  Delete(comentario: Comentario){
    if(confirm('Estas seguro de eliminar ? ')){
      this.service.deletecomentario(comentario)
      .subscribe(data=>{
        //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
        this.charge();
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
     });
    }
    window.location.reload();

   }

   AddHVT(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddComentarioViviendaComponent,dialogConfig);
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
    this.dialog.open(Addlev2comentaryviviendaComponent,dialogConfig);
   }
}
