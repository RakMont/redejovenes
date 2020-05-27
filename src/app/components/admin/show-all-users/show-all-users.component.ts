import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscriber} from 'rxjs';
import { historiaVidaTexto } from 'src/app/models/historiaVidaTexto-model';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  usuarios:Usuario[];
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: UserService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllusers()
   .subscribe(data =>{
     this.usuarios = data;

   });
  }
  Delete(){

  }

}
