import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import{MatDialog,MatDialogConfig}from '@angular/material/dialog';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  usuarios:Usuario[];
  user:Usuario;
  things=[];
  public photos:any=[];
  public aux;

  ///////////////////////////////////
  folders = [
    { name: 'Folder 1', link: '#1' },
    { name: 'Folder 2', link: '#2' },
    { name: 'Folder 3', link: '#3' },
    { name: 'Folder 4', link: '#4' },
    { name: 'Folder 5', link: '#5' }
  ];

  responsive = true;
  cols = 1;
  /////////////////////////////////
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: UserService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllusersphoto().subscribe(response=>{
      this.photos=response;

     this.Convertlist();

    });
    this.service.getAllusers()
   .subscribe(data =>{
     this.usuarios = data;
    this.user=this.usuarios[0];
    console.log(this.user.roles[0]);
   });
  }
  Delete(user: Usuario){
    if(confirm('Estas seguro de eliminar ? ')){
      this.service.deleteHVT(user)
      .subscribe(data=>{
        this.usuarios=this.usuarios.filter(p=>p==user);
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
     });
    }
    window.location.reload();

  }
  Convertlist(){
    let c: number = 0;

    for(let photo of this.photos){
      this.aux=this.usuarios[c];
      this.things.push({photo:photo,id:this.aux.id,username:this.aux.username,password:this.aux.password,email:this.aux.email,nombre:this.aux.nombre,apellido:this.aux.apellido,fecha_nacimiento:this.aux.fecha_nacimiento,lugar_acogida:this.aux.lugar_acogida,telefono:this.aux.telefono,perfil:this.aux.perfil,genero:this.aux.genero,roles:this.aux.roles});
      c=c+1;
    }

  }
}
