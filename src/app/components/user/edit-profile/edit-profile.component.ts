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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  form: any = {};
  lugar_acogida:String;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  startDate = new Date(2000, 0, 1);
  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditProfileComponent>,public userservice:UserService) {
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
  }

  close(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    this.userservice.editProfile(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.dialogbox.close();
        this.userservice.filter("Register click");
        this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

    this.userservice
    .getUserProfile(this.userservice.formData.username).subscribe(data=>{
      this.userprof=data;
    });
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["user"]));

  }
}
