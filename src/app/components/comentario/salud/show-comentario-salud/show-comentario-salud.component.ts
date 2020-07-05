import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Subscriber} from 'rxjs';
import { Comentario } from 'src/app/models/Comentario';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddComentarioSaludComponent}from 'src/app/components/comentario/salud/add-comentario-salud/add-comentario-salud.component';
import{EditComentarioSaludComponent}from 'src/app/components/comentario/salud/edit-comentario-salud/edit-comentario-salud.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/Usuario';
import { Addlev2comentarysaludComponent } from '../addlev2comentarysalud/addlev2comentarysalud.component';

@Component({
  selector: 'app-show-comentario-salud',
  templateUrl: './show-comentario-salud.component.html',
  styleUrls: ['./show-comentario-salud.component.css']
})
export class ShowComentarioSaludComponent implements OnInit {
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
    this.service.listComentariosRawSalud()
   .subscribe(data =>{
     this.comentariosRaw = data;
   });
   this.service.getPhotosofrawsaludcoments()
   .subscribe(data =>{
     this.photos = data;
     this.Convertlist();

   });
   this.service.listComentariosSalud()
   .subscribe(data =>{
     this.comentarios = data;
   });
   this.service.listComentariosSalud()
   .subscribe(data =>{
     this.comentarios = data;

   });
    this.service.getPhotosofsaludcoments()
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
    this.service.listComentariosRawSalud()
    .subscribe(data =>{
      this.comentariosRaw = data;
    });
    this.service.listComentariosSalud()
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
     this.dialog.open(EditComentarioSaludComponent,dialogConfig);

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
      this.dialog.open(AddComentarioSaludComponent,dialogConfig);
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
      this.dialog.open(Addlev2comentarysaludComponent,dialogConfig);
     }
  }
