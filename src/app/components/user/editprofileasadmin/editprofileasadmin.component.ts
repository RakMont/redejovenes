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
  selector: 'app-editprofileasadmin',
  templateUrl: './editprofileasadmin.component.html',
  styleUrls: ['./editprofileasadmin.component.css']
})
export class EditprofileasadminComponent implements OnInit {
  form: any = {};
  lugar_acogida:String;
  isSuccessful = false;
  firstusername;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  startDate = new Date(2000, 0, 1);
  generos=["Masculino","Femenino","OTRO"];
  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditprofileasadminComponent>,public userservice:UserService) {
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
    this.userservice.updateprofileadmin(this.userservice.formData).subscribe(
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

    if(this.isSuccessful==true){
            this.dialogbox.close();
            this.userservice.filter("Register click");
            this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["mod"]));
      }

  }
}

