import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{ComentarioService}from 'src/app/services/comentario.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addlev2comentarytrabajo',
  templateUrl: './addlev2comentarytrabajo.component.html',
  styleUrls: ['./addlev2comentarytrabajo.component.css']
})
export class Addlev2comentarytrabajoComponent implements OnInit {
  userprof:Usuario;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  id;
  constructor(private userservice:UserService,private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<Addlev2comentarytrabajoComponent>,public service:ComentarioService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.id=user.id;
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    this.userservice.getUserProfile(this.username)
    .subscribe(data =>{
    this.userprof = data;
    console.log(this.userprof);
  });
  }
  close(){
    this.dialogbox.close();
    }
    onSubmit(){
      let c=null;
      //this.Guardar();
      this.service.formData.user=this.userprof;
     // console.log(this.service.formData);

      this.service.agregarComentarioTrabajo(this.service.formData).subscribe((res)=>{
        c=res;

      this.service.filter("Register click");
        this.snackBar.open('Añadido correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
        if(c!=null){
          this.dialogbox.close();
          console.log('this is the result'+c);
          window.location.reload();
        }
      })

      //window.location.reload();

    }
}
