import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{HistoriaVidaTextoService}from 'src/app/services/historia-vida-texto.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/Usuario';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import{AuthService}from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  form: any = {};
  form2:any={};
  lugar_acogida:String;
  isSuccessful = false;
  firstusername;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  isLoggedIn = false;
  isLoginFailed = false;
  startDate = new Date(2000, 0, 1);
  generos=["Masculino","Femenino","OTRO"];
  roles: string[] = [];

  constructor(private authService: AuthService,private snackBar:MatSnackBar,private tokenStorage: TokenStorageService, private router: Router,public dialogbox:MatDialogRef<EditProfileComponent>,public userservice:UserService) {
    this.userservice.listen().subscribe((m:any)=>{
      console.log(m);


    });
  }
  userprof:Usuario

  listData:MatTableDataSource<any>;
  confirm_password:String;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.userservice.formData.password="";
    this.firstusername=this.userservice.formData.username;
  }

  close(){
    this.dialogbox.close();
  }
  onSubmit(){

    console.log(this.userservice.formData);
    this.userservice.editProfile(this.userservice.formData).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  /* this.form2=this.form;
    console.log(this.form2);
    this.tokenStorage.signOut();
    console.log(this.form2);
*/
   /* if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.resetForm();
*/
   /* this.authService.login(this.form2).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );*/
   this.dialogbox.close();
    this.userservice.filter("Register click");
            this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["user"]));


  }


  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.userservice.formData={
      id:0,
      nombre:'',
      apellido:'',
      email:'',
      fecha_nacimiento:new Date,
      username:'',
      password:'',
      lugar_acogida:'',
      telefono:0,
      perfil:'',
      genero:'',
      roles:[""]

    }

}
}
