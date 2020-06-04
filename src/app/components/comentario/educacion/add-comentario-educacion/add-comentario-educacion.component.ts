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
  selector: 'app-add-comentario-educacion',
  templateUrl: './add-comentario-educacion.component.html',
  styleUrls: ['./add-comentario-educacion.component.css']
})
export class AddComentarioEducacionComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  id;
  userprof:Usuario;
  constructor(private userservice:UserService,private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<AddComentarioEducacionComponent>,public service:ComentarioService) { }

  ngOnInit(): void {
    this.resetForm();
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
resetForm(form?:NgForm){
if(form!=null)
form.resetForm();

this.service.formData={
  id_comentario:0,
  comentario:'',
  fecha:new Date,
  id_comentario_ref:0,
  referente:0,
  user:new Usuario
}
}
onSubmit(){
  //this.Guardar();
  this.service.formData.user=this.userprof;
  console.log(this.service.formData);

  this.service.agregarComentarioEducacion(this.service.formData).subscribe(res=>{
    this.resetForm();
    this.dialogbox.close();
  this.service.filter("Register click");
    this.snackBar.open('Añadido correctamente','',{
      duration:5000,
      verticalPosition:'top'
    });
  })

  window.location.reload();

}
}
