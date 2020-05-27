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
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register-moderator',
  templateUrl: './register-moderator.component.html',
  styleUrls: ['./register-moderator.component.css']
})
export class RegisterModeratorComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  startDate = new Date(2000, 0, 1);
  date = new FormControl(new Date(2000, 0, 1));
  selectedValue: string;
   selectedCar: string;
   animalControl = new FormControl('', Validators.required);
   selectFormControl = new FormControl('', Validators.required);
  lugares=[
    "lugar 1",
    "lugar2",
    "lugar3"
  ]
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {

    this.form.fecha_nacimiento="2020-05-06";
    ///console.log(this.date.value);
    console.log(this.form);
    this.authService.register_moderator(this.form).subscribe(
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
  }
}