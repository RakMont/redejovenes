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
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<SignupComponent>,public service:UsuarioService) { }
  usuario:Usuario;
  close(){
    this.dialogbox.close();
  }
  listData:MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id_usuario:0,
      nombre:'',
      apellido:'',
      fecha_nacimiento:new Date,
      username:'',
      password:'',
      lugar_acogida:''

    }

}
onSubmit(form:NgForm){

    this.resetForm(form);
    this.dialogbox.close();




}

}
