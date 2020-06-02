import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  user:Usuario;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: UserService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllusers()
   .subscribe(data =>{
     this.usuarios = data;
    this.user=this.usuarios[0];
    console.log(this.user.roles[0]);
   });
  }
  Delete(user: Usuario){
    if(confirm('Estas seguro de eliminar ? ')){
      this.service.deleteHVT(user)
      .subscribe(data=>{
        this.usuarios=this.usuarios.filter(p=>p==user);
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
     });
    }

  }

}
