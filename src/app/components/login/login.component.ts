import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{UsuarioService}from 'src/app/services/usuario.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import{Usuario}from 'src/app/models/Usuario';
import{AuthService}from 'src/app/services/auth.service';
import{TokenStorageService}from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<LoginComponent>,public service:UsuarioService) { }
  usuario:Usuario;
  close(){
    this.dialogbox.close();
  }
  listData:MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id:0,
      nombre:'',
      apellido:'',
      email:'',
      fecha_nacimiento:new Date,
      username:'',
      password:'',
      lugar_acogida:''

    }

}
onSubmit(){

    //this.resetForm(form);
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    this.dialogbox.close();




}
reloadPage() {
  window.location.reload();
}
}
