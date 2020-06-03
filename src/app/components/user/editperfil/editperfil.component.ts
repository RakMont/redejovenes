import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import{Usuario}from 'src/app/models/Usuario';

@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.component.html',
  styleUrls: ['./editperfil.component.css']
})
export class EditperfilComponent implements OnInit {
  public hvaAudio: any=File;

  form: any = {};
  lugar_acogida:String;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  startDate = new Date(2000, 0, 1);
  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditperfilComponent>,public service:UserService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);


    });
   }

   userprof:Usuario

   listData:MatTableDataSource<any>;
   confirm_password:String;

   @ViewChild(MatSort, {static: true}) sort: MatSort;
   ngOnInit(): void {
     this.service.formData.password="";
   }

   close(){
     this.dialogbox.close();
   }
   onSubmit(){
    const formData=new FormData;
    const user = this.service.formData;
    console.log(this.service.formData);
    formData.append('user',JSON.stringify(user));
    formData.append('photo',this.hvaAudio);
    this.service.saveProfilePhoto(formData).subscribe((res)=>{

      this.dialogbox.close();

    this.service.filter("Register click");
      this.snackBar.open('Añadido correctamente','',{
        duration:5000,
        verticalPosition:'top'
    });
    })
    this.service.editProfile(this.service.formData).subscribe(
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
             this.service.filter("Register click");
             this.snackBar.open('Editado con exito','',{
         duration:5000,
         verticalPosition:'top'
       })
             this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
         this.router.navigate(["user"]));
       }

   }

   onSelectFile(event){
    //const file=event.target.file;
    const file=event.target.files[0];
    console.log(file);
    this.hvaAudio=file;
  }
}
