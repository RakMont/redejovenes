import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { Subscriber} from 'rxjs';
import { historiaVidaTexto } from 'src/app/models/historiaVidaTexto-model';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import { SignupComponent } from 'src/app/components/signup/signup.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  login(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    this.dialog.open(LoginComponent,dialogConfig);
   }
   signup(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    this.dialog.open(SignupComponent,dialogConfig);
   }
}
