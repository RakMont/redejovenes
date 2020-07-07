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
@Component({
  selector: 'app-editprofileasmoder',
  templateUrl: './editprofileasmoder.component.html',
  styleUrls: ['./editprofileasmoder.component.css']
})
export class EditprofileasmoderComponent implements OnInit {
  form: any = {};
  lugar_acogida:String;
  isSuccessful = false;
  firstusername;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  startDate = new Date(2000, 0, 1);
  generos=["Masculino","Femenino","OTRO"];
  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditprofileasmoderComponent>,public userservice:UserService) {
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
    let c=null;
    this.userservice.formData.email=this.userservice.formData.email+'@gmail.com';
    this.userservice.updateprofilemoderator(this.userservice.formData).subscribe(
      data => {
        c=data;

        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if(c!=null){
          this.dialogbox.close();
          this.userservice.filter("Register click");
          this.snackBar.open('Editado con exito','',{
            duration:5000,
            verticalPosition:'top'
          })
          window.location.reload();
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );



  }
}
